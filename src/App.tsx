import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./styles/theme";
import About from './pages/about';
import Home from './pages/home';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Provider } from "mobx-react";
import store from "./store";
import {useEffect, useState} from 'react';
import { authenticateApi } from './utils/API/authenticateApi';
import Fonts from "./styles/Fonts";
import { dataFetching } from "./utils/API/dataFetching";
import { autorun, toJS } from 'mobx';

function App() {
    const [oneMapToken, setOneMapToken] = useState('')

    const regionResponse = async () => {
        const allRegionArray = await dataFetching('getRegions', oneMapToken)
        store.map.setRegions(allRegionArray)
    }

    const weatherResponse = async () => {
        const weather = await dataFetching('getWeather')
        store.map.setWeather(weather)
    }

    useEffect(()=>{
        authenticateApi('onemap').then((res:any) => {setOneMapToken(res.access_token)});
        weatherResponse()
    }, [])

    useEffect(() => {
        store.auth.setTokens({onemap: oneMapToken, ura: ''});
        if(oneMapToken !== ""){
            regionResponse()
        }
    }, [oneMapToken])

    useEffect(() => {
      autorun(()=>{
        console.log(toJS(store.map.weather))
      })
    }, [])
    

    
  return (
    <Provider store={store} >
        <ChakraProvider theme={theme}>
            <Fonts />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    </Provider>
  );
}

export default App;
