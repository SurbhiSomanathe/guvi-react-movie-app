import { useState } from "react";

// const [state, setState] = useState(InitialValue);
export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const incrementLike = () => setLike(like + 1)
 const incrementDisLike = () => setDisLike(like + 1)
  return (
    <div className="counter-container">
      <button className="like-button" onClick={incrementLike}>
        👍 {like}</button>
      <button className="dislike-button" onClick={incrementDisLike}>
        👎 {dislike}</button>

    </div>
  );
}
