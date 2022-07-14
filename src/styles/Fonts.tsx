import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
        @font-face {
            font-family: 'FutureLight';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url('/fonts/FutureLight.ttf?') format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
            font-family: 'Coalition';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url('/fonts/coalition.ttf?') format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
            font-family: 'ROBO';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url('/fonts/ROBO.ttf?') format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}
  />
)

export default Fonts