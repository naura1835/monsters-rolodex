import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./search.component";

test("search input", () => {
  render(<Search handleChange={() => {}} />);

  userEvent.type(screen.getByPlaceholderText(/Search monsters.../i), "sarah");

  expect(screen.getByRole("search")).toHaveValue("sarah");
});
