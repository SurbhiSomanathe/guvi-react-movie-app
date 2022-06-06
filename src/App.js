
import { useState } from "react";
import "./App.css";
// import { Welcome } from "./Welcome.js";
function App() {
  // const name = "Divya";
  // const time = 30;


const names = ["KimNamJoon","KimSeokJin","MinYoongi","JungHoseok","ParkJimin","KimTaehyung","JeonJungkook","BTS"];

const students = [
];

const movieList = [
  {
  name: "RRR",
  poster:
  "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
  rating: 8.8,
  summary:
  "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  
  },
  {
  name: "Iron man 2",
  poster:
  "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  rating: 7,
  summary:
  "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  
  },
  {
  name: "No Country for Old Men",
  poster:
  "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  rating: 8.1,
  summary:
  "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  
  },
  {
  name: "Jai Bhim",
  poster:
  "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  summary:
  "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  rating: 8.8,
  
  },
  {
  name: "The Avengers",
  rating: 8,
  summary:
  "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  poster:
  "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  
  },
  {
  name: "Interstellar",
  poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  rating: 8.6,
  summary:
  "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  
  },
  {
  name: "Baahubali",
  poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  rating: 8,
  summary:
  "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  
  },
  {
  name: "Ratatouille",
  poster:
  "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  rating: 8,
  summary:
  "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  
  }
  ];
  return (
<div className="App">
{/* {students.map((student) => (
<Message name={student.name} pic={student.pic}  />
  ))} */}

{/* {names.map((nm)=> 
  (<Welcome name={nm}/>))} */}
{/* 
<div className="movie-list">
  {movieList.map((mv, index) => (<Movie movie={index} movie={mv} />
  ))}
  </div> */}

  <Welcome name = {"Surbhi"} />
  <AddColor />
    </div>
  );
}

function AddColor(){
  const [color, setColor] = useState("deepskyblue");
  const styles = {
    backgroundColor: color,
  };

  const INITIAL_COLOR_LIST = ["deepskyblue", "orange", "purple"];

  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST);

  return(
    <div>
      <input value ={color} onChange={(event)=> setColor(event.target.value)} 
      style={styles} placeholder="Enter a color"/>

<button onClick={() =>setColorList([...colorList, color]) }>AddColor</button>

      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
         </div>
  );
}
function ColorBox({color}){
  const styles = {
backgroundColor: color,
height: "25px",
width:"250px",
marginTop: "10px",
};
return <div style={styles}></div>;
}








function Movie({movie}){
const styles = {
  color: movie.rating > 8 ? "green" : "red",
};
const [show, setShow] = useState(true);

const paraStyles = {
  disply: show ? "block" : "none",
};

  return (
     <div className="movie-container">
    <img src={movie.poster} alt={movie.name} className="movie-poster" />
    <div className="movie-specs">
<h2 className="movie-name">{movie.name}</h2>
<p style={styles} className="movie-rating">⭐{movie.rating}</p>
     </div>

<button onClick={() => setShow(!show)}>Toggle summary</button>


<p style={paraStyles} className="movie-summary">
  {movie.summary}
</p>

<Counter />
</div>
);
}


export default  App;
// const [state, setState] = useState(InitialValue);
function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  return (
  <div className="counter-container">
    <button className="like-button" onClick={() => setLike(like + 1)}>👍 {like}</button>
    <button className="dislike-button" onClick={() => setDisLike(like + 1)}>👎 {dislike}</button>
   
  </div>
  );
}
 

function Welcome(props){
  console.log(props);
  return (
    <div>
          <h1>Hello, 🦋 {props.name} 🦋 </h1>
    </div>
  );
} 


function Message({pic,name}){
  // console.log(props);
  return (
    <div>
    <img className="profile-pic" src={pic} alt={name}/>
        <h1>Hello, {name} 💜⟭⟬💜</h1>
        <Counter />
    </div>
  );
} 




// function Message(props){
//   console.log(props);
//   return (
//     <div>
//     <img className="profile-pic" src={props.pic} alt={props.name}/>
//         <h1>Hello, {props.name} </h1>
//     </div>
//   );
// } 