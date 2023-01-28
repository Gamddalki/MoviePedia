import { useEffect, useState } from "react";

function Hello() {
  function effectFn() {
    console.log("Nice to meet u !!!");
    return cleanupFn;
  }
  function cleanupFn() {
    console.log("Byeeeeeee");
  }
  useEffect(effectFn, []);
  return <h1>Boom!</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
