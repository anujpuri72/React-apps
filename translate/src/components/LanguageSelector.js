import React from "react";
import LanguageContext from "../context/LanguageContext";
class LanguageSelector extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(val) => (
          <div>
            Select a language
            <i
              className="flag us"
              onClick={() => val.languageChange("english")}
            ></i>
            <i
              className="flag in"
              onClick={() => val.languageChange("hindi")}
            ></i>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}
export default LanguageSelector;
