import comics from "../Comics";
import "./App.css";

class App {
    async render() {
        await comics.render();
        comics.eventListener();
    }
}

export default new App();
