import React from "react";
class SearchBaar extends React.Component {
  state = { term: " " };
  onFormSummit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSummit}>
          <div className="field">
            <label>Video SearchBar</label>
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
export default SearchBaar;
