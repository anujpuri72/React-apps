import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

//axion returns a promise
const App = () => {
  return (
    <div className="ui container grid" style={{ margin: "10px" }}>
      <div className="ui row">
        <div className="ui column eight wide">
          <SongList />
        </div>
        <div className="ui column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};
export default App;
