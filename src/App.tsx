import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./routes/Main";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
