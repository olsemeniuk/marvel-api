import * as classes from "./Notification.module.css";
import {ROOT_MODAL} from "../../constants/root";

class Notification {
    render() {
        ROOT_MODAL.innerHTML = `
            <div class="${classes.notification}">
                <p class="${classes["notification__text"]}">No data</p>
                <button class="button ${classes["notification__button"]}" type="button""></button>
            </div> 
        `;
    }
}

export default new Notification();