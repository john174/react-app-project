import React from "react";

const Home = () => {
  return (
    <div className="vh-20  align-items-center" style={{ padding: "150px" }}>
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to MovieNestle!</h1>
        <p className="lead">
          Hello, I'm Evgeniy, and I'm thrilled to welcome you to my movie
          site...
        </p>
        <hr className="my-4" />
        <p>
          MovieNestle is your ultimate movie guide, featuring an extensive
          database powered by IMDb. Here, you can find information about all the
          movies that ever existed, from blockbusters to indie films.
          MovieNestle has got you covered.
        </p>
        <p>
          My site utilizes IMDb's comprehensive database to bring you the most
          up-to-date information on movies worldwide. Dive into the world of
          cinema with me and explore your favorite movies, discover new ones.
        </p>
        <a className="btn btn-primary btn-lg" href="/Movies" role="button">
          Explore Movies
        </a>
      </div>
    </div>
  );
};

export default Home;
