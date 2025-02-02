import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../routes";

describe("Main Layout", () => {
    it("renders the header, nav, main, and footer", () => {
        const router = createMemoryRouter(routes, { initialEntries: ["/"] });
        render(<RouterProvider router={router} />);
        screen.debug(); // Check what renders

        expect(screen.getByRole("banner")).toBeInTheDocument(); // Header
        expect(screen.getByRole("navigation")).toBeInTheDocument(); // Nav
        expect(screen.getByRole("main")).toBeInTheDocument(); // Main content
        expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // Footer
    });
});

describe("Home Page", () => {
    it("renders Home inside main when visiting /", async () => {
        const router = createMemoryRouter(routes, { initialEntries: ["/"] });
        render(<RouterProvider router={router} />);
        expect(
            await screen.findByText(/this is the home content!/i)
        ).toBeInTheDocument();
    });
});
