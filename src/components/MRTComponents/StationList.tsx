import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react'
import store from '../../store';
import data from '../../utils/data/sg-mrt-data.json';
import GeoHelpers from '../../utils/helpers/GeoHelpers';

type Props = {}

const StationList = (props: Props) => {
    const stations = GeoHelpers.getPropertyFromGeoJson(data, 'features', 'Point', 'stop_type', 'station')
    
    return (
        <Flex maxH="90vh" overflow="scroll" direction="column" >
            <Heading size="md" >Station List</Heading>
            {stations.map((station: any) => {
                return (
                    <Button borderBottomColor={station.properties.station_colors} maxW='80%' mb="2" p="4" variant='outline' onClick={()=>{
                        store.map.setClickedStation(station.geometry.coordinates, 14)
                    }}><Text fontFamily="ROBO" >{station.properties.name}/{station.properties['name_zh-Hans']}</Text></Button>
                )
            })}
        </Flex>
    )
}

export default observer(StationList)