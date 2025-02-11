import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { useOutletContext } from "react-router-dom";
import userEvent from "@testing-library/user-event";

vi.mock("react-router-dom", () => {
    return {
        useOutletContext: vi.fn(),
        Link: ({ children, ...props }) => <a {...props}>{children}</a>,
    };
});

describe("Cart Component", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it("displays loading state", () => {
        useOutletContext.mockReturnValue({
            loading: true,
            products: [],
            error: false,
            cart: [],
            setCart: () => {},
            cartTotal: 0,
        });

        render(<Cart />);
        expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });

    it("displays error state", () => {
        useOutletContext.mockReturnValue({
            loading: false,
            products: [],
            error: true,
            cart: [],
            setCart: () => {},
            cartTotal: 0,
        });

        render(<Cart />);
        expect(
            screen.getByText(/We encountered a network error./i)
        ).toBeInTheDocument();
    });

    it("renders products in the cart and displays the checkout area", () => {
        const dummyProducts = [
            {
                id: 1,
                title: "Product One",
                category: "fake",
                description: "A fake product.",
                price: 50,
            },
            {
                id: 2,
                title: "Product Two",
                category: "fake",
                description: "A fake product.",
                price: 25,
            },
            {
                id: 3,
                title: "Product Three",
                category: "fake",
                description: "A fake product.",
                price: 75,
            },
        ];

        useOutletContext.mockReturnValue({
            products: dummyProducts,
            error: false,
            loading: false,
            cart: [1, 3],
            setCart: vi.fn(),
            cartTotal: 125.0,
        });

        render(<Cart />);

        expect(
            screen.getByRole("heading", { name: /Your Cart/i })
        ).toBeInTheDocument();

        // Check that only the products with id 1 and 3 are rendered
        expect(screen.getAllByText(/Product One/i)).toHaveLength(2);
        expect(screen.getAllByText(/Product Three/i)).toHaveLength(2);
        expect(screen.queryByText(/Product Two/i)).toBeNull();

        // Verify that the checkout area displays the current total
        expect(screen.getByText(/Current Total: \$125/i)).toBeInTheDocument();

        // Check that the link to continue shopping is rendered
        expect(
            screen.getByText(/Click here to keep shopping!/i)
        ).toBeInTheDocument();
    });

    it("executes checkout correctly and resets the cart", async () => {
        const dummyProducts = [
            {
                id: 1,
                title: "Product One",
                category: "fake",
                description: "A fake product.",
                price: 50,
            },
            {
                id: 3,
                title: "Product Three",
                category: "fake",
                description: "A fake product.",
                price: 75,
            },
        ];

        const setCartMock = vi.fn();
        // Mock window.alert so it doesn't actually display an alert during the test
        const alertMock = vi.fn();
        global.alert = alertMock;

        useOutletContext.mockReturnValue({
            products: dummyProducts,
            error: false,
            loading: false,
            cart: [1],
            setCart: setCartMock,
            cartTotal: 50,
        });

        const user = userEvent.setup();

        render(<Cart />);

        // Find and click the checkout button
        const checkoutBtn = screen.getByRole("button", { name: /Checkout/i });
        await user.click(checkoutBtn);

        // Since the cart is not empty, the alert should show a success message
        expect(alertMock).toHaveBeenCalledWith(
            "Your funds have been deducted. Have a nice day!"
        );
        // And setCart should be called to reset the cart
        expect(setCartMock).toHaveBeenCalledWith([]);
    });
});
