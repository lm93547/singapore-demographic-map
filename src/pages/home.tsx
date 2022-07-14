import { Box, useBreakpointValue, useColorModeValue, useDisclosure, } from '@chakra-ui/react';
import { useState } from 'react';
import Map from '../components/Map';
import Nav from '../components/NavBar/index';
import Sidebar from '../components/SideBar/index';
import VisibilityButtons from '../components/SideBar/VisibilityButtons';
import store from '../store/index';
import StationList from '../components/MRTComponents/StationList';
import { observer } from 'mobx-react';

type Props = {}

const Home = (props: Props) => {
    const smVariant = { navigation: 'drawer', navigationButton: true }
    const mdVariant = { navigation: 'sidebar', navigationButton: false }
    const variants = useBreakpointValue({ base: smVariant, md: mdVariant })
    const { isOpen, onOpen, onClose } = useDisclosure()

    const toggleSidebar = () => store.map.setSidebarOpen("left", !store.map.sidebar.left)
    const toggleSidebarRight = () => store.map.setSidebarOpen("right", !store.map.sidebar.right)

    return (
        <Box w='100vw' h="100vh" bg={useColorModeValue('gray.400', 'gray.800')}>
            <>
                <Nav onShowSidebar={toggleSidebar} />
            </>
            <Sidebar
                variant={variants?.navigation}
                isOpen={store.map.sidebar.left}
                desktopComponent={<VisibilityButtons />}
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