import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";

// Components
import Header from "./components/header/header.component.jsx";

// Pages
import MainPage from "./pages/main.page.jsx";
import RadarPage from "./pages/radar.page.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/languages_and_frameworks" component={RadarPage} />
          <Route exact path="/data_platform" component={RadarPage} />
          <Route exact path="/cloud_platform" component={RadarPage} />
          <Route exact path="/tools" component={RadarPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
