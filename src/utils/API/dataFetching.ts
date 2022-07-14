import ky from 'ky'

export const urlToMethodMapping = {
    getRegions: 'https://developers.onemap.sg/privateapi/popapi/getAllPlanningarea?token='
}

export const dataFetching = async (type: "getRegions", token: string) => {
    if(type === "getRegions"){
        let url = urlToMethodMapping[type];
        url += token;
        console.log("🚀 ~ file: dataFetching.ts ~ line 11 ~ dataFetching ~ url", url)
        const regionResponse = await ky.get(url).json();
        console.log("🚀 ~ file: dataFetching.ts ~ line 13 ~ dataFetching ~ regionResponse", regionResponse)
        return regionResponse;
    }
}