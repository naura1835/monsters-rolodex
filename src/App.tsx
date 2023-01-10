import { ChangeEvent, useEffect, useState } from "react";

import CardList from "./components/card-list/card-list.component";
import Search from "./components/search/search.component";

import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchMonsters = async () => {
      const newMonsters = await getMonsters<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );

      return setMonsters(newMonsters);
    };

    fetchMonsters();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchString = event.target.value.toLocaleLowerCase();

    setSearchField(searchString);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <Search handleChange={handleChange} />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export async function getMonsters<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export default App;
