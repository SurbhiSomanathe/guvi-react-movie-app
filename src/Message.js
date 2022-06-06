import { Counter } from "./Counter";

function Message({ pic, name }) {
  // console.log(props);
  return (
    <div>
      <img className="profile-pic" src={pic} alt={name} />
      <h1>Hello, {name} 💜⟭⟬💜</h1>
      <Counter />
    </div>
  );
}
