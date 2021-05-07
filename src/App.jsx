import "./App.css";

import Menu from "./components/Menu/Menu";
import Home from "./Pages/Home/Home";
import Organize from "./Pages/Organize/Organize"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/organize" component={Organize} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
