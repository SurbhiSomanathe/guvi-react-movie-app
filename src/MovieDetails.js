import { useParams, useNavigate } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export function MovieDetails({ movieList }) {
  const { id } = useParams();
  console.log(id);
  console.log(movieList[id]);
  const movie = movieList[id];
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe width="100%"
        height="650"
        src={movie.trailer}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary"> {movie.summary} </p>
        <Button 
        onClick={() => navigate(-1)} 
        variant="outlined" startIcon={<ArrowBackIosIcon />}
        >
        Back
        </Button>
      </div>
    </div>
  );
}
