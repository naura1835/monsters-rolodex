import { Monster } from "../../App";

import "./card.styles.css";

type cardProps = {
  monster: Monster;
};

const Card = ({ monster }: cardProps) => {
  const { name, id, email } = monster;
  return (
    <div key={id} className="card">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Card;
