import React, { useState } from "react";
import { makeApiRequest } from "../services/Api";

const Card = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState(null);

  const toggleDetails = async () => {
    if (!showDetails && !details) {
      const movieId = movie.id.match(/tt\d+/)[0];
      const detailsUrl = `https://imdb8.p.rapidapi.com/title/v2/get-details?tconst=${movieId}`;
      const detailsResponse = await makeApiRequest(detailsUrl);
      setDetails(detailsResponse.data);
    }
    setShowDetails(!showDetails);
  };

  const imageUrl =
    movie.image?.url ||
    "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg";

  return (
    <div className="card d-flex" style={{ width: "18rem" }}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt={`Poster of ${movie.title}`}
        style={{ height: "420px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          {movie.title} is a {movie.titleType}
          {movie.year
            ? ` released in ${movie.year}`
            : " of unknown year release"}
          .
        </p>
        <button onClick={toggleDetails} className="btn btn-primary">
          {showDetails ? "Less info" : "More info"}
        </button>
        {showDetails && details && (
          <div className="movie-details">
            <p>
              <strong>Title:</strong>{" "}
              {details.title.titleText?.text || "Unknown"}
            </p>
            <p>
              <strong>Release Date:</strong>{" "}
              {details.title.releaseDate
                ? `${details.title.releaseDate.year}-${details.title.releaseDate.month}-${details.title.releaseDate.day}`
                : "Unknown"}
            </p>
            <p>
              <strong>Runtime:</strong>{" "}
              {details.title.runtime
                ? Math.round(details.title.runtime.seconds / 60)
                : "Unknown"}{" "}
              minutes
            </p>
            <p>
              <strong>Countries of Origin:</strong>{" "}
              {details.title.countriesOfOrigin?.countries?.length > 0
                ? details.title.countriesOfOrigin.countries
                    .map((country) => country.text)
                    .join(", ")
                : "Unknown"}
            </p>
            <p>
              <strong>Filming Locations:</strong>{" "}
              {details.title.filmingLocations?.edges?.length > 0
                ? details.title.filmingLocations.edges
                    .map(
                      (edge) => edge.node.displayableProperty.value.plainText
                    )
                    .join(", ")
                : "Unknown"}
            </p>
            <p>
              <strong>Official Site:</strong>{" "}
              {details.title.officialLinks?.edges.length > 0 &&
              details.title.officialLinks.edges[0]?.node.url ? (
                <a
                  href={details.title.officialLinks.edges[0].node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              ) : (
                "Unknown"
              )}
            </p>
            <p>
              <strong>Spoken Languages:</strong>{" "}
              {details.title.spokenLanguages?.spokenLanguages?.length > 0
                ? details.title.spokenLanguages.spokenLanguages
                    .map((lang) => lang.text)
                    .join(", ")
                : "Unknown"}
            </p>
            <p>
              <strong>AKAs (Also Known As):</strong>{" "}
              {details.title.akas?.edges?.length > 0
                ? details.title.akas.edges
                    .map(
                      (edge) => edge.node.displayableProperty.value.plainText
                    )
                    .join(", ")
                : "Unknown"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
