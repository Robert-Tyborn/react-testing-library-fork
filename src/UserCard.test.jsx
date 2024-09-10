import UserCard from "./UserCard";
import { screen, render } from "@testing-library/react";

test("should display the provided props", () => {
  const fakeUser = {
    name: "Robert",
    email: "hej@hej.com",
    phone: "112",
  };
  render(<UserCard user={fakeUser} />);
  expect(screen.getByText("Robert")).toBeInTheDocument();
  expect(screen.getByText("Email: hej@hej.com")).toBeInTheDocument();
  expect(screen.getByText("Phone: 112")).toBeInTheDocument();
});


  