import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesActions } from "./redux/actions/gamesActions";

function App() {
  let product = useSelector((state) => state.games);
  console.log(product);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(gamesActions());
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
