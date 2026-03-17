import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  figmaShowcase,
  placeholderFigmaEmbedUrl,
} from "../data/content";
import FigmaShowcase from "./FigmaShowcase";

const originalFigmaUrl = figmaShowcase.figmaUrl;

describe("FigmaShowcase", () => {
  afterEach(() => {
    figmaShowcase.figmaUrl = originalFigmaUrl;
  });

  it("renders iframe when figmaUrl is configured", () => {
    figmaShowcase.figmaUrl = "https://www.figma.com/file/abc123/test-file";

    render(<FigmaShowcase />);

    expect(screen.getByTitle("Figma design")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /open figma file/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/no figma file connected yet/i),
    ).not.toBeInTheDocument();
  });

  it("renders placeholder when figmaUrl is not configured", () => {
    figmaShowcase.figmaUrl = placeholderFigmaEmbedUrl;

    render(<FigmaShowcase />);

    expect(
      screen.getByText(/no figma file connected yet/i),
    ).toBeInTheDocument();
    expect(screen.queryByTitle("Figma design")).not.toBeInTheDocument();
  });
});
