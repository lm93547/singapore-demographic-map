import { GeoJsonLayer } from '@deck.gl/layers';
import data from '../../../utils/data/sg-bcn.json';
import { RGBColor } from '@deck.gl/core/utils/color';
import {RootStore} from '../../../store/index';

export const PCNLayer = (store: RootStore) => {
    const layer = new GeoJsonLayer({
            id: 'pcn-layer',
            data,
            pickable: true,
            stroked: false,
            filled: true,
            extruded: true,
            pointType: 'circle',
            lineWidthScale: 20,
            lineWidthMinPixels: 2,
            getLineColor: (d: any) => {
                function random_rgba() {
                    var o = Math.round, r = Math.random, s = 255;
                    return [o(r()*s), o(r()*s), o(r()*s), r().toFixed(1)];
                }
                return random_rgba() as unknown as RGBColor;
            },
            getPointRadius: 100,
            getLineWidth: 1,
            getElevation: 30,
            visible: store.map.layerVis.pcn,
            onHover: info => store.map.setTooltip(info)
    })
    return layer
}

