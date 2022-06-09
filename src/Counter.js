import { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

// const [state, setState] = useState(InitialValue);
export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const incrementLike = () => setLike(like + 1)
 const incrementDisLike = () => setDisLike(like + 1)
  return (
    <div className="counter-container">
       <IconButton 
      color="primary"
      className="like-button"
      onClick={incrementLike} 
      aria-label="Movie details">
        <Badge badgeContent={like} color="primary">
        👍
      </Badge>
        </IconButton>
        
        <IconButton 
      color="primary"
      className="like-button"
      onClick={incrementDisLike} 
      aria-label="Movie details">
        <Badge badgeContent={dislike} color="error">
        👎
      </Badge>
        </IconButton>
    </div>
  );
}
