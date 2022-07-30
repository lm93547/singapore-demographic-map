import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/home";

jest.mock('maplibre-gl', () => ({
    Map: () => ({})
}));

describe("Home UI Test", () => {
    test("Home renders a map", () => {
       render(
                <Home />
        );
        expect(screen.getByTestId("map")).toBeInTheDocument()
    });
    test("Home renders a navbar", () => {
        render(
                <Home />
        );
        expect(screen.getByTestId("nav")).toBeInTheDocument()
    });
});
