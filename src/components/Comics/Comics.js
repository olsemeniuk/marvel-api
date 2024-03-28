import {BASIC_URL, CHARACTERS_URL, COMICS_URL, IMAGE_NOT_AVAILABLE, IMAGE_STANDARD_XLARGE} from "../../constants/api";
import getDataApi from "../../utils/getDataApi";
import {ROOT_INDEX} from "../../constants/root";

import * as classes from "./Comics.module.css";

class Comics {
    async render() {
        const data = await getDataApi.getData(BASIC_URL + COMICS_URL);
        let htmlContent = "";

        data.forEach(({id, title, thumbnail: {path, extension}}) => {
            const noImage = path.endsWith(IMAGE_NOT_AVAILABLE);
            if (noImage) return;

            const charactersUrl = `${BASIC_URL}${COMICS_URL}/${id}/${CHARACTERS_URL}`;

            const imgSrc = `${path}/${IMAGE_STANDARD_XLARGE}.${extension}`;
            htmlContent += `
                <li class="${classes.item}" data-url="${charactersUrl}">
                    <span class="${classes.title}">${title}</span> 
                    <img class="${classes.img}" src="${imgSrc}" alt="">
                </li>
            `;
        });

        ROOT_INDEX.innerHTML = `<ul class="${classes.list}">${htmlContent}</ul>`;
    }

    eventListener() {
        const comicsList = document.querySelector(`.${classes.list}`);
        comicsList.addEventListener("click", event => {
            const {target} = event;
            const isItem = target.closest(`.${classes.item}`);
            if (!isItem) return;

            const charactersUrl = isItem.dataset.url;
        });
    }
}

export default new Comics();
