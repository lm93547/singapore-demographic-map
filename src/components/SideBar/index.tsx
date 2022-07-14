import {
    Box,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    useColorModeValue,
} from '@chakra-ui/react'
import { observer } from 'mobx-react';

interface Props {
    onClose: () => void
    isOpen: boolean
    variant: string | undefined;
    desktopComponent: JSX.Element;
    mobileComponent: JSX.Element;
    side: 'left' | 'right'
}


const Sidebar = ({ isOpen, variant, onClose, desktopComponent, mobileComponent, side }: Props) => {
    const color = useColorModeValue('gray.100', 'gray.800')
    return variant === 'sidebar' ? (
        <Box
            position="fixed"
            left={side === 'left' ? 0 : 'unset'}
            right={side === 'right' ? 0 : 'unset'}
            p={5}
            w="25%"
            top={'64px'}
            h="calc(100vh - 56px)"
            bg={color}
            zIndex={9999999}
            visibility={isOpen ? 'visible' : 'hidden'}
            opacity={isOpen ? 1 : 0}
            transition="all 0.5s ease-in-out"
        >
            {desktopComponent}
        </Box>
    ) : (
        <Drawer isOpen={isOpen} placement={side === "left" ? "left" : "right"} onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Chakra-UI</DrawerHeader>
                    <DrawerBody>
                        {mobileComponent}
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}

export default observer(Sidebar)
