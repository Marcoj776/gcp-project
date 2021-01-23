import logo from "./logo.svg";
import "./App.css";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App">
          <Typography>
            Hi Dad
          </Typography>
      </div>
    </div>
  );
}

export default App;
