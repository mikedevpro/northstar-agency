import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import LandingPage from "./LandingPage";

vi.mock("../components/Navbar", () => ({
  default: () => <div data-testid="navbar" />,
}));
vi.mock("../components/Hero", () => ({
  default: () => <div data-testid="hero" />,
}));
vi.mock("../components/LogoStrip", () => ({
  default: () => <div data-testid="logo-strip" />,
}));
vi.mock("../components/Services", () => ({
  default: () => <div data-testid="services" />,
}));
vi.mock("../components/FigmaShowcase", () => ({
  default: () => <div data-testid="figma-showcase" />,
}));
vi.mock("../components/CaseStudy", () => ({
  default: () => <div data-testid="case-study" />,
}));
vi.mock("../components/Testimonials", () => ({
  default: () => <div data-testid="testimonials" />,
}));
vi.mock("../components/CTASection", () => ({
  default: () => <div data-testid="cta-section" />,
}));
vi.mock("../components/Footer", () => ({
  default: () => <div data-testid="footer" />,
}));

describe("LandingPage", () => {
  it("renders all child components", () => {
    render(<LandingPage />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("logo-strip")).toBeInTheDocument();
    expect(screen.getByTestId("services")).toBeInTheDocument();
    expect(screen.getByTestId("figma-showcase")).toBeInTheDocument();
    expect(screen.getByTestId("case-study")).toBeInTheDocument();
    expect(screen.getByTestId("testimonials")).toBeInTheDocument();
    expect(screen.getByTestId("cta-section")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
