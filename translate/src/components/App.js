import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

// import
class App extends React.Component {
  state = { language: "english", color: "blue" };
  languageChange = (language, color) => {
    this.setState({ language, color });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select language:
          <i
            className="flag us"
            onClick={() => this.languageChange("english", "blue")}
          />
          <i
            className="flag in"
            onClick={() => this.languageChange("hindi", "red")}
          />
        </div>
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}
export default App;
