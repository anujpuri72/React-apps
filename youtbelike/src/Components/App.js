import React from "react";
import SearchBaar from "./SearchBaar";
import youtube from "../apis/youtube";
class App extends React.Component {
  state = { videos: [] };
  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 25,
        key: "AIzaSyB43dbbY0glXNCjUhig4V9LAOIK7UiYnxU"
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  render() {
    return <SearchBaar onSearchSubmit={this.onSearchSubmit} />;
  }
}
export default App;
