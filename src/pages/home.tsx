import { Box, useColorModeValue,  } from '@chakra-ui/react';
import Nav from '../components/NavBar/index';

type Props = {}

const Home = (props: Props) => {
  return (
    <Box w='100vw' h="100vh" bg={useColorModeValue('gray.400', 'gray.800')}>
        <>
            <Nav />
        </>
    </Box>
  )
}

export default Home