import { ChangeEvent, ChangeEventHandler } from "react";

import "./search.styles.css";

type searchProps = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  // onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; THIS IS THE SAME AS ABOVE
  placeholder?: string; //tells ts its an optional value i.e string
};

const Search = ({ handleChange, placeholder }: searchProps) => (
  <input
    role="search"
    className="search-bar"
    type="search"
    onChange={handleChange}
    placeholder={placeholder ?? "Search monsters..."}
  />
);

export default Search;
