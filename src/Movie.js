import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function Movie({ movie, id}) {
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);

  const paraStyles = {
    disply: show ? "block" : "none",
  };

const navigate = useNavigate();

  return (
    <Card className="movie-container" sx={{ height: "min-content"}}>
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}
        <IconButton 
      color="primary"
       onClick={() => navigate(`/movies/${id}`)} aria-label="Movie details" 
       >
        <InfoIcon />
       </IconButton>
       <IconButton 
      color="primary"
      onClick={() => setShow(!show)} aria-label="Movie details">
         {show ?  <ExpandLessIcon /> : <ExpandMoreIcon /> }
       </IconButton>

      </h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>

        {show ? <p className="movie-summary"> {movie.summary} </p> : null}
        </CardContent>
        <CardActions>
        <Counter />
        </CardActions>
</Card>

  );
}
