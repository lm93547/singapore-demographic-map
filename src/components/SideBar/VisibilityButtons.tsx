import React from 'react'
import { Flex, Button, Text } from '@chakra-ui/react';
import store from '../../store/index';
import { observer } from 'mobx-react';

type Props = {}

const VisibilityButtons = (props: Props) => {
    return (
        <Flex direction="column" >
            <Button lineHeight="unset" display='flex' alignItems='center' bgSize='175%' backdropFilter={'opacity(0.2)'} bgImage={'/assets/images/contours.jpg'} colorScheme='blue' variant={store.map.layerVis.mrt ? "outline" : "ghost"} mb="4" onClick={() => {
                store.map.setVis('mrt', !store.map.layerVis.mrt)
                store.map.setSidebarOpen('right', !store.map.sidebar.right)
            }}>
                <Text lineHeight="unset" fontFamily="Coalition" >MRT</Text>
            </Button>
            <Button lineHeight="unset" bgSize='175%' backdropFilter={'opacity(0.2)'} bgImage={'/assets/images/contours.jpg'} colorScheme='blue' variant={store.map.layerVis.pcn ? "outline" : "ghost"} mb="4" onClick={() => {
                store.map.setVis('pcn', !store.map.layerVis.pcn)
            }}>
                <Text lineHeight="unset" fontFamily="Coalition" >PCN</Text>
            </Button>
            <Button lineHeight="unset" bgSize='175%' backdropFilter={'opacity(0.2)'} bgImage={'/assets/images/contours.jpg'} colorScheme='blue' variant={store.map.layerVis.region ? "outline" : "ghost"} mb="4" onClick={() => {
                store.map.setVis('region', !store.map.layerVis.region)
            }}>
                <Text lineHeight="unset" fontFamily="Coalition" >Regions</Text>
            </Button>
        </Flex>
    )
}

export default observer(VisibilityButtons)