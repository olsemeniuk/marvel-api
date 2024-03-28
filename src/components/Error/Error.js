import {ROOT_INDEX} from "../../constants/root";
import * as classes from "./Error.module.css";

class Error {
    render() {
        ROOT_INDEX.innerHTML = `
            <div class="${classes.wrapper}">
                <div>
                    <p class="${classes.alert}">Error!</p>
                    <p class="${classes.alert}">Try later.</p>
                </div> 
            </div> 
        `;
    }
}

export default new Error();