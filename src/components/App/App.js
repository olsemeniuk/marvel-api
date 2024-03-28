import comics from "../Comics";
import "./App.css";

class App {
    async render() {
        await comics.render()
    }
}

export default new App();
