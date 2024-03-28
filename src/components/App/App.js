import {BASIC_URL, COMICS_URL, CHARACTERS_URL} from "../../constants/api";
import getDataApi from "../../utils/getDataApi";

import "./App.css";

class App {
    async render() {
        const data = await getDataApi.getData(BASIC_URL + CHARACTERS_URL);
        console.log(data);
    }
}

export default new App();
