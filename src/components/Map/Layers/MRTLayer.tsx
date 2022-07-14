import { GeoJsonLayer } from '@deck.gl/layers';
import data from '../../../utils/data/sg-mrt-data.json';
import ColourHelpers from '../../../utils/helpers/ColourHelpers';
import { mrtLineColours } from '../../../utils/constants/mrtLineColours';
import { RGBColor } from '@deck.gl/core/utils/color';
import {RootStore} from '../../../store/index';

export const MRTLayer = (store: RootStore) => {
    const layer = new GeoJsonLayer({
            id: 'geojson-layer',
            data,
            pickable: true,
            stroked: false,
            filled: true,
            extruded: true,
            pointType: 'circle',
            lineWidthScale: 20,
            lineWidthMinPixels: 2,
            getFillColor: [103, 215, 207, 200],
            getLineColor: (d: any) => {
                console.log(d?.properties?.line_color);
                return ColourHelpers.hexToRgb(mrtLineColours[d?.properties?.line_color]) as RGBColor;
            },
            getPointRadius: 100,
            getLineWidth: 1,
            getElevation: 30,
            visible: store.map.layerVis.mrt,
            onHover: info => store.map.setTooltip(info)
    })
    return layer
}