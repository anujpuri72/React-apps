import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
//axion returns a promise
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID d723401a374da44febb4c2fed0c4f1657e5227000767a38d3695b2464b44bb58"
      }
    });
    this.setState({
      images: response.data.results
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onsubmitted={this.onSearchSubmit} />
        Found : {this.state.images.length} images
      </div>
    );
  }
}
export default App;
