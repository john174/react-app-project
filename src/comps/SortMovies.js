const sortMoviesByYear = (movies, sortByYearAsc) => {
    return movies.sort((a, b) =>
      sortByYearAsc ? a.year - b.year : b.year - a.year
    );
  };
  
  const sortMoviesByTitle = (movies, sortByTitleAsc) => {
    return movies.sort((a, b) =>
      sortByTitleAsc
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
  };
  
  export { sortMoviesByYear, sortMoviesByTitle };
  