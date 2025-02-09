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
            name: "here",
        });

        await user.click(link);

        expect(screen.getByRole("h3").textContent).toMatch(
            /Click each product for more details!/i
        );
    });

    // it("button to take user to shopping page should do nothing when not clicked", () => {
    //     const router = createMemoryRouter(routes);

    //     render(<RouterProvider router={router} />);

    //     // Check layout roles
    //     expect(screen.getByRole("banner")).toBeInTheDocument(); // Header
    //     expect(screen.getByRole("navigation")).toBeInTheDocument(); // Nav
    //     expect(screen.getByRole("main")).toBeInTheDocument(); // Main content
    //     expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // Footer
    // });
});
