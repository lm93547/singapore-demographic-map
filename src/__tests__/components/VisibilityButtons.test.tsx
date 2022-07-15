import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import VisibilityButtons from "../../components/SideBar/VisibilityButtons";

describe("VisibilityButtons UI Test", () => {
    test("The VisibilityButtons renders", () => {
        render(
            <VisibilityButtons />
        );
        expect(screen.getByTestId("vis-btns")).toBeInTheDocument()
    });
});
