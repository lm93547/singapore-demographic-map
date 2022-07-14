import { GeoJsonLayer } from '@deck.gl/layers';
import { RGBColor } from '@deck.gl/core/utils/color';
import {RootStore} from '../../../store/index';

export const RegionLayer = (store: RootStore) => {
    const layers = [] as any
    if(store.map.regions.length > 0){
        store?.map?.regions.map((data, index)=>{
            const layer = new GeoJsonLayer({
                    id: `region-layer-${index}`,
                    data: JSON.parse(data.geojson),
                    pickable: true,
                    stroked: false,
                    filled: true,
                    extruded: true,
                    pointType: 'circle',
                    lineWidthScale: 20,
                    lineWidthMinPixels: 2,
                    getFillColor: (d: any) => {
                        function random_rgba_blue() {
                            var o = Math.round, r = Math.random, s = 255;
                            return [0, 0, o(r()*s), r().toFixed(1)];
                        }
                        return random_rgba_blue() as unknown as RGBColor;
                    },
                    getPointRadius: 100,
                    getLineWidth: 1,
                    getElevation: 30,
                    visible: store.map.layerVis.region,
                    opacity: 0.5,
                    onHover: info => store.map.setTooltip(info)
            })
            return layers.push(layer)
        })
    }
    return layers
}
