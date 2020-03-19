import React from "react";
import SearchBaar from "./SearchBaar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onSearchSubmit("oneplus 6t");
  }
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
      videos: response.data.items,
      selectedVideo: response.data.items[0]
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
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBaar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                onvideoSelect={this.onvideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
