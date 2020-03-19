import React from "react";
import { connect } from "react-redux";
const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div>
        <h1>Select a song</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Duration for :</h1>
      <p>
        Title: {song.title}
        <br /> Duration: {song.duration}
      </p>
    </div>
  );
};
const mapStatetoprops = state => {
  //   console.log(state);
  return { song: state.selectedSong };
};
export default connect(mapStatetoprops)(SongDetail);
