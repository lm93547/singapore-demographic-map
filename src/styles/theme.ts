// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const fonts = {
    heading: `'Coalition', sans-serif`,
    body: `'FutureLight', sans-serif`,
}

const theme = extendTheme({ config, colors, fonts })

export default theme