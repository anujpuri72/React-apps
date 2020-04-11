import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import streamCreate from "./streams/streamCreate";
import streamEdit from "./streams/streamEdit";
import streamDelete from "./streams/streamDelete";
import streamList from "./streams/streamList";
import streamShow from "./streams/streamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={streamList}></Route>
            <Route path="/streams/new" exact component={streamCreate}></Route>
            <Route
              path="/streams/edit/:id"
              exact
              component={streamEdit}
            ></Route>
            <Route
              path="/streams/delete/:id"
              exact
              component={streamDelete}
            ></Route>
            <Route path="/streams/:id" exact component={streamShow}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
