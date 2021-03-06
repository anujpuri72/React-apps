import React from "react";

class SearchBar extends React.Component {
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  state = { term: "" };
  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.term);
    this.props.onsubmitted(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image SearchBar</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e =>
                this.setState({
                  term: e.target.value
                })
              }
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
