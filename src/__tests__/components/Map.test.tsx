import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Map from "../../components/Map";

jest.mock('maplibre-gl', () => ({
    Map: () => ({})
}));

describe("Map UI Test", () => {
    test("The Map renders", () => {
        window.URL.createObjectURL = function() {} as any;
            render(
                <Map />
            );
        expect(screen.getByTestId("map")).toBeInTheDocument()
    });
});
