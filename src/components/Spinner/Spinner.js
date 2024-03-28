import {ROOT_SPINNER} from "../../constants/root";
import * as classes from "./Spinner.module.css";

class Spinner {
    handleClear() {
        ROOT_SPINNER.innerHTML = "";
    }

    render() {
        ROOT_SPINNER.innerHTML = `<div class="${classes.spinner}"></div>`;
    }
}

export default new Spinner();