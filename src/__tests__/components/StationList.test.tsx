import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StationList from "../../components/MRTComponents/StationList";
import GeoHelpers from '../../utils/helpers/GeoHelpers';
import data from '../../utils/data/sg-mrt-data.json';

describe("StationList UI Test", () => {
    test("The StationList renders all the buttons for each station", () => {
        const stationData =  GeoHelpers.getPropertyFromGeoJson(data, 'features', 'Point', 'stop_type', 'station')
        const geoHelperSpy = jest.spyOn(GeoHelpers, 'getPropertyFromGeoJson')
        geoHelperSpy.mockReturnValue(stationData);
        render(
            <StationList />
        );
        expect(screen.getAllByTestId("station-btn")).toHaveLength(160)
    });
});
