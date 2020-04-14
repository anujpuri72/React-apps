import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    // const text = this.context === "english" ? "Submit" : "Jma kron?";

    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui ${color} button `}>
            <LanguageContext.Consumer>
              {({ language }) =>
                language === "english" ? "Submit" : "Jma kron?"
              }
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
