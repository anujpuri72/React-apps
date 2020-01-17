import React from "react";
import SearchBaar from "./SearchBaar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyB43dbbY0glXNCjUhig4V9LAOIK7UiYnxU"
      }
    });
    this.setState({
      videos: response.data.items
    });
  };
  onvideoSelect = video => {
    console.log("From the app", video);
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    return (
      <div>
        <SearchBaar onSearchSubmit={this.onSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onvideoSelect={this.onvideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
export default App;
