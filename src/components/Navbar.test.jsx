import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("toggles mobile navigation on button click", () => {
    render(<Navbar />);

    expect(screen.getAllByRole("button", { name: /book a call/i })).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "☰" }));

    expect(screen.getByRole("button", { name: "✕" })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /book a call/i })).toHaveLength(2);

    fireEvent.click(screen.getByRole("button", { name: "✕" }));

    expect(screen.getByRole("button", { name: "☰" })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /book a call/i })).toHaveLength(1);
  });
});
