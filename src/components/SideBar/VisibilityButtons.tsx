import React from 'react'
import { Flex, Button, Text } from '@chakra-ui/react';
import store from '../../store/index';
import { observer } from 'mobx-react';

type Props = {}

const VisibilityButtons = (props: Props) => {
    return (
        <Flex data-testid="vis-btns" direction="column" >
            <Button transition="1s all" borderBottom="dotted" border="none" lineHeight="unset" display='flex' alignItems='center' bgSize='175%' backdropFilter={'opacity(0.2)'} colorScheme='blue' variant={store.map.layerVis.mrt ? "solid" : "outline"} mb="4" onClick={() => {
                store.map.setVis('mrt', !store.map.layerVis.mrt)
                store.map.setSidebarOpen('right', !store.map.sidebar.right)
            }}>
                <Text lineHeight="unset" fontFamily="Coalition" >MRT</Text>
            </Button>
            <Button transition="1s all" borderBottom="dotted" border="none" lineHeight="unset" bgSize='175%' backdropFilter={'opacity(0.2)'} colorScheme='blue' variant={store.map.layerVis.pcn ? "solid" : "outline"} mb="4" onClick={() => {
                store.map.setVis('pcn', !store.map.layerVis.pcn)
            }}>
                <Text lineHeight="unset" fontFamily="Coalition" >PCN</Text>
            </Button>
            <Button transition="1s all" borderBottom="dotted" border="none" lineHeight="unset" bgSize='175%' backdropFilter={'opacity(0.2)'} colorScheme='blue' variant={store.map.layerVis.region ? "solid" : "outline"} mb="4" onClick={() => {
                store.map.setVis('region', !store.map.layerVis.region)
            }}>
                <Text lineHeight="unset" fontFamily="Coalition" >Regions</Text>
            </Button>
        </Flex>
    )
}

export default observer(VisibilityButtons)