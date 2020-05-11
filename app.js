import Game from "./models/Game.js";

// region __CHAIRS__
let chair = {} // POJO (Plain Old Javascript Object | Type: Object)
class Chair { // Class Defenition ( Type: Chair )
    constructor(legs, material) {
        this.legs = legs //left of the '.' at call time
        this.material = material
    }
}

let sofaChair = new Chair(2, "wood and pleather");

let kitchenChair = new Chair(4, "wood");
kitchenChair.legs

// endregion


class App {
    game = new Game();
}

window['app'] = new App();
