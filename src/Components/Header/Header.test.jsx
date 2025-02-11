import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
    it("renders the header with title and logo", () => {
        render(<Header />);

        const heading = screen.getByRole("heading", {
            name: /shopping cart app/i,
        });
        expect(heading).toBeInTheDocument();

        const logo = screen.getByAltText(/company logo, a fish/i);
        expect(logo).toBeInTheDocument();
    });
});
