import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import Search from "./components/search/search.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = { monsters: [], searchField: "" };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        this.setState(() => {
          return { monsters: data };
        })
      );
  }

  handleChange = (event) =>
    this.setState({ searchField: event.target.value.toLocaleLowerCase() });
  render() {
    const { monsters, searchField } = this.state;
    const { handleChange } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search handleChange={handleChange} />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
