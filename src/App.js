import "./App.css";
function App() {
  // const name = "Divya";
  // const time = 30;

const names = ["KimNamJoon","KimSeokJin","MinYoongi","JungHoseok","ParkJimin","KimTaehyung","JeonJungkook","BTS"];

const students = [
  { 
    name:"KimNamJoon",
    pic:"https://lh3.googleusercontent.com/cVA7oKmFjdjnaVY7D39HOiuLVGbn0QPEfBNKkvZ2hsxdaVGuX5DRBcGlQUN6e9MSM_9690Xabpo2PcC6K5eyQJ5z"
  },
 {
   name:"KimSeokJin",
   pic:"https://lh3.googleusercontent.com/rsinNbEDPHC6RzCyBHdQJFgqWkkz0g_fb_iEqq2fcMad-orgGSZx_FjU65Q7m7IA6Wve_Hrts5IlGGlIuUzq75E"
  },
{
  name:"MinYoongi",
  pic:"https://lh3.googleusercontent.com/cyWtWiqpuQwszSl8gX2IwMT_h11PQBCg_B5GutW1q2Ex0krpY_JCjIMbJ1AhQZxrs7CnvR89VIPdJ4B2mUA4yXM01Q"
},
{
  name:"JungHoseok" ,
  pic:"https://lh3.googleusercontent.com/gCZfFx5gVLvXnNLw_SWHNZDf55RYNTVdRVhKrYK10rmS1C1vfg0yKSFlSXJ3IZrPP6hseWgEv6jf7vxv7itTpJIc5A"
},
{
  name:"ParkJimin" ,
  pic:"https://lh3.googleusercontent.com/u3g34k-ainjxEFOyJ58-4Dvch-uqQ6q2mhN_JT3E2wHjbv-LpmCR_-4Uowdt_A5cdQyD4eDWIZvm-Hpy7WgrzeK7YQ"
},

{
  name:"KimTaehyung" ,
  pic:"https://lh3.googleusercontent.com/P8iszSIOvGKrqWYo_DYebQ5FnxH1IbgumJX0hkEGYdEoH98cJFsP8j4y8Z49HpL_KqzYkEoy394QZ2q7MpCJsHPIXA"
},

{
  name:"JeonJungkook" ,
  pic:"https://lh3.googleusercontent.com/JKKCfUNHJytFHO9WMyjnVdbC2UrAGmszPNQxbMPieQz4OJ0EW9GmXlZDYc-bq-qPqrDHWscStV4YguiF9Ux1nWY"
},

{
  name:"BTS" ,
  pic:"https://lh3.googleusercontent.com/z2Nx3OKs17IJ72sR8tjk124xgfgGJPw80NeOfO9nAvQ34WFWFwqi-ndFQzQKpdZ4rdnGqBH7c0rVTrcaJF4vTHs"
},

];
  return (
<div className="App">
{students.map((student) => (
<Message name={student.name} pic={student.pic}  />
  ))}

{/* {names.map((nm)=> 
  (<Welcome name={nm}/>))} */}

    </div>
  );
}
export default  App;


function Welcome(props){
  console.log(props);
  return (
    <div>
          <h1>Hello, 🦋 {props.name}🦋 </h1>
    </div>
  );
} 


function Message({pic,name}){
  // console.log(props);
  return (
    <div>
    <img className="profile-pic" src={pic} alt={name}/>
        <h1>Hello, {name} 💜⟭⟬💜</h1>
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