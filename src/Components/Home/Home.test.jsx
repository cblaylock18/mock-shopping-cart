import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
//remember for tests this needs to be react-router, not react-router-dom!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import userEvent from "@testing-library/user-event";
import routes from "../../routes";

describe("Home Page Interaction", () => {
    it("button to take user to shopping page should do so when clicked", async () => {
        const user = userEvent.setup();

        const router = createMemoryRouter(routes);

        render(<RouterProvider router={router} />);

        const link = screen.getByRole("link", {
            name: "Click here for all our products!",
        });

        await user.click(link);

        const heading = await screen.findByRole("heading", {
            name: /Click each product for more details!/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
