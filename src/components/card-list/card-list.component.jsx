import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.filteredMonsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
