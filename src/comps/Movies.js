import React, { useState, useEffect } from "react";
import { fetchMoviesByQuery } from "../services/Api";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { sortMoviesByYear, sortMoviesByTitle } from "./SortMovies";
import "bootstrap/dist/css/bootstrap.min.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("avatar");
  const [sortByYearAsc, setSortByYearAsc] = useState(true);
  const [sortByTitleAsc, setSortByTitleAsc] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      if (!query.trim()) return;

      const response = await fetchMoviesByQuery(query);
      if (response?.results) {
        setMovies(response.results);
      }
    };

    loadMovies();
    

    const handleBeforeUnload = () => setMovies([]);

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [query]);

  const handleSortByYear = () => {
    const sortedMovies = sortMoviesByYear([...movies], sortByYearAsc);
    setMovies(sortedMovies);
    setSortByYearAsc(!sortByYearAsc);
  };

  const handleSortByTitle = () => {
    const sortedMovies = sortMoviesByTitle([...movies], sortByTitleAsc);
    setMovies(sortedMovies);
    setSortByTitleAsc(!sortByTitleAsc);
  };

  return (
    <div className="container mt-5">
      <SearchBar
        onSearch={(newQuery) => {
          setQuery(newQuery);
        }}
      />
      <div>
        <button
          style={{ marginRight: "20px" }}
          onClick={handleSortByYear}
          className="btn btn-dark mt-3 mr-3 btn-sm"
        >
          Sort by Year {sortByYearAsc ? "↑" : "↓"}
        </button>
        <button
          onClick={handleSortByTitle}
          className="btn btn-dark mt-3 btn-sm"
        >
          Sort by Title {sortByTitleAsc ? "↑" : "↓"}
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {movies.map((movie, index) => (    //sort by year and title
          <div key={movie.id || index} className="col">
            <Card movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;