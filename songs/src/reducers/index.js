import { combineReducers } from "redux";
const songList = () => {
  return [
    { tittle: "main bhi changa", duration: "4:05" },
    { tittle: "mera pyo bhi changa", duration: "4:05" },
    { tittle: "maa bhi changi", duration: "4:05" },
    { tittle: "rishtedar", duration: "4:05" }
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
