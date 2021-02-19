import React from "react";
import "./Nav.css";
import request from "./request";

function Nav({ SetselectOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => SetselectOption(request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => SetselectOption(request.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => SetselectOption(request.fetchActionMovies)}>Action</h2>
      <h2 onClick={() => SetselectOption(request.fetchComedyMovies)}>Comedy</h2>
      <h2 onClick={() => SetselectOption(request.fetchHorrorMovies)}>Horror</h2>
      <h2 onClick={() => SetselectOption(request.fetchRomanceMovies)}>
        Romane
      </h2>
      <h2 onClick={() => SetselectOption(request.fetchNetflixOrginals)}>
        Sci-fi
      </h2>
      <h2 onClick={() => SetselectOption(request.fetchDocumentaries)}>
        Western
      </h2>
      <h2 onClick={() => SetselectOption(request.fetchTrending)}>Animation</h2>
      <h2 onClick={() => SetselectOption(request.fetchTopRated)}>Movie</h2>
    </div>
  );
}

export default Nav;
