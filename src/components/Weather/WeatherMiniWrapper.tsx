import React from 'react'
import { Flex, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import store from '../../store/index';

type Props = {}

const WeatherMiniWrapper = (props: Props) => {
  return (
    <Flex>
        <Flex lineHeight="unset" direction="column" mr="2" >
            <Text color='lightblue' lineHeight="unset" fontFamily={'ROBO'} >{store.map.weather?.daily?.temperature_2m_max[0] as any}</Text>
            <Text color='lightblue' lineHeight="unset" fontFamily={'ROBO'} >{store.map.weather?.daily?.temperature_2m_min[0] as any}</Text>
        </Flex>
        <Flex lineHeight="unset" direction="column" >
            <Text color='lightblue' lineHeight="unset" fontFamily={'ROBO'} >{store.map.weather?.daily?.sunrise[0].split("T")[1] as any}</Text>
            <Text color='lightblue' lineHeight="unset" fontFamily={'ROBO'} >{store.map.weather?.daily?.sunset[0].split("T")[1] as any}</Text>
        </Flex>
    </Flex>
  )
}

export default observer(WeatherMiniWrapper)