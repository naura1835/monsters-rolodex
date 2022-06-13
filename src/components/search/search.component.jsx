import { Component } from "react";

import "./search.styles.css";

class Search extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <input
        className="search-bar"
        type="search"
        onChange={handleChange}
        placeholder="Search monsters..."
      />
    );
  }
}

export default Search;
