import "./App.css";
import Picture from "./component/Picture";
import data from "./helper/data";

function App() {
  return (
    <div className="App row mx-auto d-flex justify-content-evenly gap-3 my-3">
      <h1>Best Photos</h1>
      {data.map((item, a) => (
        <Picture
          key={a}
          photographer={item.photographer}
          large={item.src.large}
        />
      ))}
    </div>
  );
}

export default App;
