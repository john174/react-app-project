import React, { useState } from "react";
import { makeApiRequest } from "../services/Api";
import MoreInfo from "./MoreInfo";


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
          {movie.year ? ` released in ${movie.year}` : " of unknown year release"}.
        </p>
        <button onClick={toggleDetails} className="btn btn-primary">
          {showDetails ? "Less info" : "More info"}
        </button>
      </div>
      <MoreInfo details={details} visible={showDetails} onClose={() => setShowDetails(false)} />
    </div>
  );
};

export default Card;
