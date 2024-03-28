import {ROOT_MODAL} from "../../constants/root";
import {IMAGE_STANDARD_XLARGE} from "../../constants/api";
import getDataApi from "../../utils/getDataApi";
import notification from "../Notification";

import * as classes from "./Characters.module.css";

class Characters {
    constructor() {
        document.body.addEventListener("click", event => {
            const {target} = event;
            const isModalList = target.closest(`.${classes.modal__list}`);
            if (!isModalList) {
                ROOT_MODAL.innerHTML = "";
            }
        });
    }

    renderContent(data) {
        let htmlContent = "";
        data.forEach(({name, thumbnail: {extension, path}}) => {
            const imgSrc = `${path}/${IMAGE_STANDARD_XLARGE}.${extension}`;
            htmlContent += `
                <li class="${classes.item}">
                    <img class="${classes["item__img"]}" src="${imgSrc}" alt=""> 
                    <span class="${classes["item__name"]}">${name}</span>
                </li> 
            `;
        });

        ROOT_MODAL.innerHTML = `
            <div class="${classes.modal}">
                <button class="button ${classes.button}" type="button"></button>
                <ul class="${classes["modal__list"]}">${htmlContent}</ul>
            </div>
        `;
    }

    async render(url) {
        const data = await getDataApi.getData(url);
        data.length ? this.renderContent(data) : notification.render();
    }
}

export default new Characters();