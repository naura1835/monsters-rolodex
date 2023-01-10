import { render, screen } from "@testing-library/react";

import Card from "./card.component";

test("render card component", () => {
  const card = render(
    <Card monster={{ name: "amanda", id: 10, email: "kbhv" }} />
  );
  //   expect(screen.getByRole("img")).toHaveProperty("alt");
  //   expect(screen.getByRole("heading")).toHaveTextContent("amanda");
  expect(card).toMatchSnapshot();
  //   screen.debug();
});
