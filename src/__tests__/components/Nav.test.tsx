import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../../components/NavBar";

describe("Nav UI Test", () => {
    test("The Navbar renders", () => {
        window.URL.createObjectURL = function() {} as any;
            render(
                <NavBar />
            );
        expect(screen.getByTestId("nav")).toBeInTheDocument()
    });
});
