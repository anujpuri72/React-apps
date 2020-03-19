import { combineReducers } from "redux";
const songList = () => {
  return [
    { title: "main bhi changa", duration: "4:05" },
    { title: "mera pyo bhi changa", duration: "4:05" },
    { title: "maa bhi changi", duration: "4:05" },
    { title: "rishtedar", duration: "4:05" }
  ];
};
const selectSongreducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs: songList,
  selectedSong: selectSongreducer
});
