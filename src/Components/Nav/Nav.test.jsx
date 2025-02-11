import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter, MemoryRouter } from "react-router";
import routes from "../../routes";
import { Nav } from "./Nav";

describe("Nav Renders", () => {
    it("renders content correctly", () => {
        const router = createMemoryRouter(routes);
        render(<RouterProvider router={router} />);

        const home = screen.getByRole("link", {
            name: "Home",
        });
        expect(home).toBeInTheDocument();

        const products = screen.getByRole("link", {
            name: "Products",
        });
        expect(products).toBeInTheDocument();

        const policies = screen.getByRole("link", {
            name: "Policies",
        });
        expect(policies).toBeInTheDocument();

        const cart = screen.getByRole("link", {
            name: /Cart/i,
        });
        expect(cart).toBeInTheDocument();
    });
});

describe("Nav cart display", () => {
    it("displays default text with empty cart", () => {
        render(
            <MemoryRouter>
                <Nav cart={[]} cartTotal={0}></Nav>
            </MemoryRouter>
        );

        const defaultCartMessage = screen.getByRole("link", {
            name: /Add a product/i,
        });
        expect(defaultCartMessage).toBeInTheDocument();
    });

    it("displays cart items and cart total with items in cart", () => {
        render(
            <MemoryRouter>
                <Nav cart={[1, 2, 3]} cartTotal={99.99}></Nav>
            </MemoryRouter>
        );

        const cartItems = screen.getByRole("link", {
            name: /3 items: \$99.99/i,
        });
        expect(cartItems).toBeInTheDocument();
    });
});
