import { Component } from "react";

import "./search.styles.css";

class Search extends Component {
  render() {
    const { handleChange } = this.props;
    return <input type="search" onChange={handleChange} />;
  }
}

export default Search;
