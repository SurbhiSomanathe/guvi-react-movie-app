import { useState } from "react";
import { Movie } from "./Movie";
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };

    setMovieList([...movieList, newMovie]);
    console.log(newMovie);
  };


  return (
    <div>
      <div className="add-movie-form">
        <TextField
          label="Name"
          variant="standard"
          onChange={(event) => setName(event.target.value)} />
        <TextField
          label="Poster"
          variant="standard"
          onChange={(event) => setPoster(event.target.value)} />
        <TextField
          label="Rating"
          variant="standard"
          onChange={(event) => setRating(event.target.value)} />
        <TextField
          label="Summary"
          variant="standard"
          onChange={(event) => setSummary(event.target.value)} />

        <Button onClick={addMovie} variant="outlined">Add Movie</Button>
      </div>
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
