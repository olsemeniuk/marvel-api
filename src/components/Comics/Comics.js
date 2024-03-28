import {BASIC_URL, CHARACTERS_URL, COMICS_URL, IMAGE_NOT_AVAILABLE, IMAGE_STANDARD_XLARGE} from "../../constants/api";
import {ROOT_INDEX} from "../../constants/root";

import getDataApi from "../../utils/getDataApi";
import error from "../Error";
import characters from "../Characters";

import * as classes from "./Comics.module.css";

class Comics {
    renderComics(data) {
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

    async render() {
        const data = await getDataApi.getData(BASIC_URL + COMICS_URL);
        data ? this.renderComics(data) : error.render();
    }

    eventListener() {
        const comicsList = document.querySelector(`.${classes.list}`);
        if (!comicsList) return;
        comicsList.addEventListener("click", async (event) => {
            const {target} = event;
            const isItem = target.closest(`.${classes.item}`);
            if (!isItem) return;

            const charactersUrl = isItem.dataset.url;
            await characters.render(charactersUrl);
        });
    }
}

export default new Comics();
