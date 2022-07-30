import { Box, useBreakpointValue, useColorModeValue, useDisclosure, } from '@chakra-ui/react';
import { useState } from 'react';
import Map from '../components/Map';
import Nav from '../components/NavBar/index';
import Sidebar from '../components/SideBar/index';
import VisibilityButtons from '../components/SideBar/VisibilityButtons';
import store from '../store/index';
import StationList from '../components/MRTComponents/StationList';
import { observer } from 'mobx-react';
import SidebarHeading from '../components/SideBar/SidebarHeading';

type Props = {}

const Home = (props: Props) => {
    const smVariant = { navigation: 'drawer', navigationButton: true }
    const mdVariant = { navigation: 'sidebar', navigationButton: false }
    const variants = useBreakpointValue({ base: smVariant, md: mdVariant })
    const { onClose } = useDisclosure()


    return (
        <Box w='100vw' h="100vh" bg={useColorModeValue('gray.400', 'gray.800')}>
            <>
                <Nav />
            </>
            <Sidebar
                variant={variants?.navigation}
                isOpen={store.map.sidebar.left}
                desktopComponent={
                    <>
                        <SidebarHeading />
                        <VisibilityButtons />                    
                    </>
                }
                mobileComponent={<></>}
                side="left"
                onClose={onClose}
            />
            <Map />
            <Sidebar
                variant={variants?.navigation}
                isOpen={store.map.sidebar.right}
                desktopComponent={<StationList />}
                mobileComponent={<></>}
                side="right"
                onClose={onClose}
            />
        </Box>
    )
}

export default observer(Home)