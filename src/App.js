
import { useState } from "react";
import { AddColor } from "./AddColor";
import "./App.css";
import { Welcome } from "./Welcome.1";
// import { Welcome } from "./Welcome.js";
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MovieDetails } from "./MovieDetails";
import { Home } from "./Home";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import { NotFound } from "./NotFound";


export function App() {
  // const name = "Divya";
  // const time = 30;


const names = ["KimNamJoon","KimSeokJin","MinYoongi","JungHoseok","ParkJimin","KimTaehyung","JeonJungkook","BTS"];

const students = [
];

const INITIAL_MOVIE_LIST = [
    {
  name: "Pirates of the Caribbean: The Curse of the Black Pearl",
  poster:
  "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
  rating: 8.1,
  summary:
  "A blacksmith joins forces with Captain Jack Sparrow, a pirate, in a bid to free the love of his life from Jack's associates, who kidnapped her suspecting she has the medallion.",
  trailer: "https://www.youtube.com/embed/naQr0uTrH_s"
  },
  {
    name: "Pirates of the Caribbean: Dead Man's Chest",
    poster:
    "https://i.discogs.com/Kd6vr_S77Vy38VuL_Dv_oRpv7tLa3ADbNh90nSXDRgQ/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTczNTI5/NC0xNjMxNjczNTc0/LTkzNTUuanBlZw.jpeg",
    rating: 7.3,
    summary:
    "Captain Jack Sparrow seeks the heart of Davy Jones, a mythical pirate, in order to avoid being enslaved to him. However, others, including his friends Will and Elizabeth, want it for their own gain.",
    trailer: "https://www.youtube.com/embed/6-NGPgX-uYA"
    },
  {
  name: "Pirates of the Caribbean: At World's End",
  poster:
  "https://static1.moviewebimages.com/wordpress/wp-content/uploads/movie/iXKlD48XWEJILjFDAF8Jdw1EcQ16t3.jpg",
  summary:
  "As the East India Company gains untold power and persecutes pirates en masse, Will, Elizabeth and Captain Barbossa decide to bring Jack Sparrow back from the dead for one final battle.",
  rating: 7.1,
  trailer: "https://www.youtube.com/embed/HKSZtp_OGHY"
  },

  {
    name: "Pirates of the Caribbean: On Stranger Tides",
    poster:
    "https://i.scdn.co/image/ab67616d0000b2739b486780ee7bdaddfbb93775",
    summary:
    "Captain Jack Sparrow sets sail in search of the legendary fountain of youth. His mission puts him up against a mysterious woman from his past, an old enemy Barbossa and the feared pirate, Blackbeard.",
    rating: 6.6,
    trailer: "https://www.youtube.com/embed/KR_9A-cUEJc"
    },

    {
      name: "Pirates of the Caribbean: Dead Men Tell No Tales",
      poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_piratesofthecaribbean_deadmentellnotales_19642_e89de0a3.jpeg?region=0%2C0%2C540%2C810",
      summary:
      "To break the curse of Flying Dutchman, Captain Jack Sparrow and Henry Turner embark on a mission to find the Trident of Poseidon. They also try to stop Captain Salazar who intends to rule the seas.",
      rating: 6.5,
      trailer: "https://www.youtube.com/embed/Hgeu5rhoxxY"
      },
      {
        name: "The Avengers",
        rating: 7.3,
        summary:
        "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
        poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg",

        trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
        },
        {
          name: "Avengers: Age of Ultron ",
          rating: 7.3,
          summary:
          "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.",
          poster:
          "https://www.denofgeek.com/wp-content/uploads/2014/01/avengers_age_of_ultron_2015_movie-wide-scaled.jpg?fit=2560%2C1600",
          trailer: "https://www.youtube.com/embed/tmeOjFno6Do"
          },
  
        {
          name: "Avengers: Infinity War",
          rating: 8.4,
          summary:
          "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
          poster:
          "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_mas_hlf_01_3.jpg",
          trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8"
          },
  {
  name: "Avengers: Endgame",
  rating: 8.4,
  summary:
  "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
  poster:
  "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
  trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
  },
  {
  name: "Interstellar",
  poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  rating: 8.6,
  summary:
  "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    name: "RRR",
    poster:
    "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
    "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer:"https://www.youtube.com/embed/GY4BgdUSpbE"
    },
  
  {
  name: "Baahubali",
  poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  rating: 8,
  summary:
  "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  trailer : "https://www.youtube.com/embed/cKVArxf4duA" 
},
  {
  name: "Ratatouille",
  poster:
  "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  rating: 8,
  summary:
  "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  trailer : "https://www.youtube.com/embed/jOGDozdW9Yo"
  }
  ];


const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
const navigate = useNavigate();

  return (
<div className="App">
{/* {students.map((student) => (
<Message name={student.name} pic={student.pic}  />
  ))} */}

{/* {names.map((nm)=> 
  (<Welcome name={nm}/>))} */}
      <AppBar position="static">
        <Toolbar>
                  <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
                  <Button color="inherit"onClick={() => navigate("/movies")}>Movies</Button>
                  <Button color="inherit"onClick={() => navigate("/movies/add")}>Add movie</Button>
                  <Button color="inherit" onClick={() => navigate("/color-game")}>Color Game</Button>
        </Toolbar>
      </AppBar>

<section className="route-container">

<Routes>     
        <Route path="/" element={<Home />} />
        <Route path="/color-game" element={<AddColor />} />
        {/* <Route path="/films" element={<Navigate replace to="/movies" />} /> */}
        <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />
        } 
        />
        <Route path="/movies/:id"
         element={<MovieDetails movieList={movieList} />} />
        <Route path="/movies/add" element={< AddMovie movieList={movieList} setMovieList={setMovieList}/>} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route path="/404" element={<NotFound />}  />
         <Route path="*" element={<Navigate replace to="/404" />}  />

</Routes>

</section>



  {/* <Welcome name = {"Surbhi"} />
  <AddColor /> */}
    </div>
  );
}

export default App;

