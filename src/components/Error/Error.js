import {ROOT_INDEX} from "../../constants/root";
import * as classes from "./Error.module.css";

class Error {
    render() {
        const htmlWrapper = `
            <div class="${classes.wrapper}">
                <div>
                    <p class="${classes.alert}">Error!</p>
                    <p class="${classes.alert}">Try later.</p>
                </div> 
            </div> 
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Error();