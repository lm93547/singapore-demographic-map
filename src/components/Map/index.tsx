import React from 'react'
import StaticMap from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import { useColorModeValue, Box, useColorMode, Text } from '@chakra-ui/react';
import { DeckGL } from '@deck.gl/react';
import store from '../../store/index';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { MRTLayer } from './Layers/MRTLayer';
import { PCNLayer } from './Layers/PCNLayer';
import { RegionLayer } from './Layers/RegionLayer';

type Props = {}

const MapComponent = (props: Props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [viewState, setViewState] = useState({
        latitude: 1.29027,
        longitude: 103.851959,
        zoom: 11,
        bearing: 0,
        pitch: 0,
    })

    useEffect(()=>{
        setViewState({
            latitude: store.map.clickedStation[1],
            longitude: store.map.clickedStation[0],
            zoom: store.map.zoom,
            bearing: 0,
            pitch: 0,
        })
    }, [store.map.clickedStation])

    const [layers, setLayers] = useState<any>([])

    useEffect(() => {
        const newRegion = RegionLayer(store)
        const newMrt = MRTLayer(store)
        const newPCN = PCNLayer(store)
        setLayers([newRegion, newMrt, newPCN])
    }, [store.map.layerVis.mrt, store.map.layerVis.pcn, store.map.regions, store.map.layerVis.region])
    

    return (
        <div id="map" data-testid="map" >
            <DeckGL 
                initialViewState={viewState} 
                controller={true}
                layers={layers}
            >
                <StaticMap
                    mapLib={maplibregl}
                    style={{width: '100vw', height: 'calc(100vh - 64px)', zIndex: '-1'}}
                    mapStyle={useColorModeValue("https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json", "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json")}
                />
                {store.map.tooltip.object && (
                    <Box p="2" borderRadius="2px" color={"white"} bg={colorMode === "light" ? "lightgray" : "black"} style={{position: 'absolute', zIndex: 1, pointerEvents: 'none', left: store.map.tooltip.x, top: store.map.tooltip.y}}>
                    <Text fontFamily="ROBO">
                        { store?.map?.tooltip?.object?.properties?.name }
                        { store?.map?.tooltip?.layer?.id?.includes('region-layer') && store?.map?.regions[Number(store?.map?.tooltip?.layer?.id?.replace(/[^0-9]/g,''))].pln_area_n}
                    </Text>
                    </Box>
                )}
            </DeckGL>
        </div>
    )
}

export default observer(MapComponent)