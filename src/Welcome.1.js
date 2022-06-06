import { App } from "./App";

export default App;
export function Welcome(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello, 🦋 {props.name} 🦋 </h1>
    </div>
  );
}
