import React from "react";
const Context = React.createContext("english");
export class LanguageStore extends React.Component {
  state = { language: "english" };
  languageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, languageChange: this.languageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Context;
