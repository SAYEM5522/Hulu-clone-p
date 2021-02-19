import React, { useState } from "react";
import "./VideoCard.css";
import ThumbUpSharp from "@material-ui/icons/ThumbUp";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function VideoCard({ movie }) {
  const baseURL = "https://image.tmdb.org/t/p/original/";

  const [trailerUrl, SettrailerUrl] = useState("");

  const opts = {
    width: "100%",
    height: "460",

    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      SettrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          SettrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div className="videocard">
      <img
        src={`${baseURL}${movie?.backdrop_path}`}
        alt=""
        onClick={() => handleClick(movie)}
      />
      <p>{truncate(movie?.overview, 42)}</p>
      <h2>{movie?.title || movie?.original_title}</h2>
      <p className="videocard__last">
        <span className="videocard__sats"> {movie.release_date}</span>

        <ThumbUpSharp />
        {movie.vote_count}
      </p>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default VideoCard;
