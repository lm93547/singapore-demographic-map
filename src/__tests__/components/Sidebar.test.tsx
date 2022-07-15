import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SideBar from "../../components/SideBar";

describe("Sidebar UI Test", () => {
    test("The Sidebar renders the desktop component", () => {
        const onClose = jest.fn()
        render(
            <SideBar
                variant={"sidebar"}
                isOpen={true}
                desktopComponent={<>Rendered</>}
                mobileComponent={<>Mobile Rendered</>}
                side="left"
                onClose={onClose}
            />
        );
        expect(screen.getByText("Rendered")).toBeInTheDocument()
    });
    test("The Sidebar renders the mobile component", () => {
        const onClose = jest.fn()
        render(
            <SideBar
                variant={"drawer"}
                isOpen={true}
                desktopComponent={<>Rendered</>}
                mobileComponent={<>Mobile Rendered</>}
                side="left"
                onClose={onClose}
            />
        );
        expect(screen.getByText("Mobile Rendered")).toBeInTheDocument()
    });
});
