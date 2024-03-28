import app from "./components/App";
import comics from "./components/Comics";

(async () => {
    await app.render();
    comics.eventListener();
})();