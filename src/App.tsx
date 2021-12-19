import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <h1>Barbarian Prince game sheet</h1>
      <div>
        <ul>
          <li>Combat: 8</li>
          <li>Endurance: 9</li>
          <li>Wit & wiles: 5</li>
          <li>Gold: 1</li>
          <li>Food: 3</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
