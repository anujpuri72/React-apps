import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import streamCreate from "./streams/streamCreate";
import streamEdit from "./streams/streamEdit";
import streamDelete from "./streams/streamDelete";
import streamList from "./streams/streamList";
import streamShow from "./streams/streamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={streamList}></Route>
          <Route path="/streams/new" exact component={streamCreate}></Route>
          <Route path="/streams/edit" exact component={streamEdit}></Route>
          <Route path="/streams/delete" exact component={streamDelete}></Route>
          <Route path="/streams/show" exact component={streamShow}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
