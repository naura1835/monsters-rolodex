import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App, { getMonsters } from "./App";

test("fetch monsters from api", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          monsters: [
            { name: "ali", email: "ali.com" },
            { name: "mika", email: "mika@gmail.com" },
          ],
        }),
    })
  );

  expect.assertions(3);

  return getMonsters(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(data.monsters).toEqual([
      { name: "ali", email: "ali.com" },
      { name: "mika", email: "mika@gmail.com" },
    ]);
  });
});

// test("correctly update state", async () => {
//   const app = render(<App />);

//   userEvent.type(screen.getByRole("search"), "mika");

//   // expect(app).toHaveBeenCalledWith(
//   //   expect.objectContaining({
//   //     monsters: [],
//   //     searchField: "amanda",
//   //   })
//   // );
// });
