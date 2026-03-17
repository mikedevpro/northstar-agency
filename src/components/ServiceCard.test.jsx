import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ServiceCard } from "./Services";

describe("ServiceCard", () => {
  it("displays correct title and description", () => {
    render(
      <ServiceCard
        title="Custom service title"
        description="Custom service description"
      />,
    );

    expect(
      screen.getByRole("heading", { level: 3, name: "Custom service title" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Custom service description")).toBeInTheDocument();
  });
});
