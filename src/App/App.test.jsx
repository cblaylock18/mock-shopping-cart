import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
//remember for tests this needs to be react-router, not react-router-dom!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import routes from "../routes";

describe("Main Layout with Nested Routes", () => {
    it("renders the header, nav, main, footer, and home content", () => {
        const router = createMemoryRouter(routes);

        render(<RouterProvider router={router} />);

        // Check layout roles
        expect(screen.getByRole("banner")).toBeInTheDocument(); // Header
        expect(screen.getByRole("navigation")).toBeInTheDocument(); // Nav
        expect(screen.getByRole("main")).toBeInTheDocument(); // Main content
        expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // Footer
    });
});

describe("Home Page", () => {
    it("renders Home inside main when visiting /", () => {
        const router = createMemoryRouter(routes);
        render(<RouterProvider router={router} />);
        expect(
            screen.getByText(
                /Welcome to the "So Cool It's Literally Unreal" shopping store!/i
            )
        ).toBeInTheDocument();
    });
});
