import App from "./App";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("should render loading", () => {
  render(<App />);

  expect(screen.getByText("Loading..")).toBeInTheDocument();
});

test("should render 3 users", async () => {
  render(<App />);
  const user = userEvent.setup();

  await waitFor(async () =>
    expect(screen.queryByText("Loading..")).not.toBeInTheDocument()
  );

  const button = screen.getByRole("button");

  await user.click(button);

  expect(screen.getAllByText(/Email:/i)).toHaveLength(3);
});

test("should render 3 users", async () => {
  render(<App />);
  const user = userEvent.setup();

  await waitFor(async () =>
    expect(screen.queryByText("Loading..")).not.toBeInTheDocument()
  );

  const button = screen.getByRole("button");

  await user.click(button);

  expect(screen.getAllByText(/Email:/i)).toHaveLength(3);

  await user.click(button);

  expect(screen.queryByText("Email")).not.toBeInTheDocument();
});

test("should render 3 users", async () => {
  render(<App />);
  const user = userEvent.setup();

  await waitFor(async () =>
    expect(screen.queryByText("Loading..")).not.toBeInTheDocument()
  );

  const button = screen.getByRole("button");

  await user.click(button);

  expect(screen.getAllByText(/Email:/i)).toHaveLength(3);

  await user.click(button);

  expect(screen.queryByText("All users currently hidden")).toBeInTheDocument();
});
