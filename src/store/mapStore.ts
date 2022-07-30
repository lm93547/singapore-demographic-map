import { makeAutoObservable } from "mobx";
import { RootStore } from ".";

// MobX implementation
// Defining the store. In the working concept these will be extracted into their own files
class MapStore {
	// defining the intial state (the types are inferred)
    clickedStation: [number, number] = [103.851959, 1.290270];
    layerVis = {mrt: false, pcn: false, region: false}
    sidebar = {left: false, right: false}
    weather: any = {}
    tooltip: any = {}
    regions: any = []
    zoom = 11
	rootStore: RootStore;

	// this is what allows the store to automatically subscribe to actions
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
		makeAutoObservable(this);
	}

    setClickedStation(station: [number, number], zoom: number) {
        this.clickedStation = station;
        this.zoom = zoom;
    }

    setVis(layer: string, vis: boolean){
        this.layerVis[layer] = vis;
    }

    setTooltip(body: any){
        this.tooltip = body;
    }

    setRegions(regions: any){
        this.regions = regions;
    }

    setSidebarOpen(side: string, open: boolean){
        this.sidebar[side] = open;
    }

    setWeather(weather: any){
        this.weather = weather;
    }
}

export default MapStore;
