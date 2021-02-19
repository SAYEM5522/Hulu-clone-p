import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "./Result.css";
import axios from "./axios";
import request from "./request";

function Result({ selectOption }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const requests = await axios.get(selectOption);
      console.log(requests);
      setMovie(requests.data.results);
    };
    fetchData();
  }, [selectOption]);
  return (
    <div className="result">
      {movie.map((movies) => (
        <VideoCard movie={movies} />
      ))}
    </div>
  );
}

export default Result;
