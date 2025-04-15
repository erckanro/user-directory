import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";
import { User } from "../types/User";

const mockUser: User = {
  id: 1,
  name: "Erick Anero",
  email: "erick@example.com",
  phone: "0123456789",
  address: {
    suite: "Apt. 8",
    street: "123 Main St",
    city: "Manila",
    zipcode: "1000",
  },
};

test("renders user name and email", () => {
  render(<UserCard user={mockUser} />);
  expect(screen.getByText(/Erick Anero/i)).toBeInTheDocument();
  expect(screen.getByText(/erick@example.com/i)).toBeInTheDocument();
});
