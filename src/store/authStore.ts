import { makeAutoObservable } from "mobx";
import { RootStore } from ".";

// MobX implementation
// Defining the store. In the working concept these will be extracted into their own files
class AuthStore {
	// defining the intial state (the types are inferred)
    tokens = {
        'onemap': '',
        'ura': ''
    }
	rootStore: RootStore;

	// this is what allows the store to automatically subscribe to actions
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
		makeAutoObservable(this);
	}

    setTokens(tokens) {
        this.tokens = tokens;
    }


}

export default AuthStore;
