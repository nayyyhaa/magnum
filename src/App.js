import a from "./api.js";
import { useDispatch, useSelector } from "react-redux";

function App() {
   let product = useSelector((state) => state.games);
   console.log(product);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
