import { configure } from "mobx";
import MapStore from './mapStore';
import AuthStore from './authStore';

// MobX implementation
// Defining the store. In the working concept these will be extracted into their own files
export class RootStore {
    map: MapStore
    auth: AuthStore

	constructor() {
		this.map = new MapStore(this);
        this.auth = new AuthStore(this);
	}
}

configure({ enforceActions: "never" }); // strict mode

const store = new RootStore();

export default store;
