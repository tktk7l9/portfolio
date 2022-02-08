/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import { Blog } from "./";

describe("Blog", () => {
  it("renders a heading", () => {
    render(<Blog />);
    const heading = screen.getByRole("heading", { name: /Blog/i });
    expect(heading).toBeInTheDocument();
  });
});
