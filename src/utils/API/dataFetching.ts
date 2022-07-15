import ky from 'ky'

export const urlToMethodMapping = {
    getRegions: 'https://developers.onemap.sg/privateapi/popapi/getAllPlanningarea?token=',
    getWeather: "https://api.open-meteo.com/v1/forecast?latitude=1.2894&longitude=103.8500&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,precipitation_hours&timezone=Asia%2FSingapore"
}

export const dataFetching = async (type: "getRegions" | "getWeather", token: string = "") => {
    if(type === "getRegions"){
        let url = urlToMethodMapping[type];
        url += token;
        console.log("🚀 ~ file: dataFetching.ts ~ line 11 ~ dataFetching ~ url", url)
        const regionResponse = await ky.get(url).json();
        console.log("🚀 ~ file: dataFetching.ts ~ line 13 ~ dataFetching ~ regionResponse", regionResponse)
        return regionResponse;
    }
    if(type === "getWeather"){
        let url = urlToMethodMapping[type];
        const weatherResponse = await ky.get(url).json();
        return weatherResponse;
    }
}