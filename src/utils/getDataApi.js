import {md5} from "js-md5";
import {PRIVATE_KEY, PUBLIC_KEY} from "../hidden_data/data";
import axios from "axios";

class GetDataApi {
    constructor() {
        this.timestamp = Date.now();
        this.hash = md5(this.timestamp + PRIVATE_KEY + PUBLIC_KEY);
    }

    async getData(url) {
        try {
            const response = await axios.get(url, {
                params: {
                    "ts": this.timestamp,
                    "apikey": PUBLIC_KEY,
                    "hash": this.hash,
                    "limit": 100
                }
            });
            return response.data.data.results;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}

export default new GetDataApi();
