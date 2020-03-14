import React from "react";
import { selectSong } from "../actions";
import SongList from "./SongList";

//axion returns a promise
const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
};
export default App;
