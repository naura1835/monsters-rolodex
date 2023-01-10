import { render } from "@testing-library/react";

import CardList from "./card-list.component";

test("to render cardlist", () => {
  const mockMonsters = [
    { name: "mika", id: 1, email: "mika@gmail.com" },
    { name: "amanda", id: 10, email: "kbhv" },
  ];
  const cardList = render(<CardList filteredMonsters={mockMonsters} />);

  expect(cardList).toMatchSnapshot();
});
