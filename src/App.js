import React from "react";
import "./styles.css";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
export default function App() {
  const name = () => {
    return <h1>This is a name page</h1>;
  };
  const Error = () => {
    return <h1>Ops! Page not found</h1>;
  };
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/user/:fname/:lname" component={User} />
        <Route path="/contact/name" component={name} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
