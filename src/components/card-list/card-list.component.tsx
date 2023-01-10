import { Monster } from "../../App";

import Card from "../card/card.component";

import "./card-list.styles.css";

type cardListProps = {
  filteredMonsters: Monster[];
};

const CardList = ({ filteredMonsters }: cardListProps) => {
  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
