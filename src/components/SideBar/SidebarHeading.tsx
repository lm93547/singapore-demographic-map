import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react';
import WeatherMiniWrapper from '../Weather/WeatherMiniWrapper';
import GeoHelpers from '../../utils/helpers/GeoHelpers';

type Props = {}

const SidebarHeading = (props: Props) => {
  return (
    <Flex mb="8" direction="row" alignItems="end" >
        <Heading fontFamily="FutureLight" mr="4" >
            Singapore
        </Heading>
        <WeatherMiniWrapper />
        <Text ml="4" fontFamily="ROBO" >{GeoHelpers.calcTime("+8")}</Text>
    </Flex>
  )
}

export default SidebarHeading