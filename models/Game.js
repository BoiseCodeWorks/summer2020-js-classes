import Item from "./Item.js";
// PRIVATE
let state = {
    cheese: 0,
    clickModifiers: 0,
    autoModifiers: 0,
    items: {
        pick: new Item("pick", 10, 1, false),
        knife: new Item("knife", 35, 5, false),
        cart: new Item("cart", 100, 10, true),
        mouse: new Item("mouse", 200, 100, true)
    }
}

function draw() {
    document.getElementById("cheese").innerHTML = state.cheese.toString();
}

function autoMine() {
    if (state.autoModifiers) {
        state.cheese += state.autoModifiers
        draw()
    }
}

setInterval(autoMine, 3000)
// PUBLIC
export default class Game {
    mine() {
        state.cheese += 1 + state.clickModifiers
        draw()
    }
    buy(name) {
        let item = state.items[name]; // items.pick
        if (item.cost <= state.cheese) {
            item.quantity++
            state.cheese -= item.cost
            item.cost *= 2
            if (item.auto) {
                state.autoModifiers += item.modifier
            } else {
                state.clickModifiers += item.modifier
            }
            draw()
        }
    }


    // NOTE stretch goal for "save game"
    save() {
        localStorage.setItem("game", JSON.stringify(state))
    }
    load() {
        let game = JSON.parse(localStorage.getItem("game"))
        if (game) {
            state = game;
        }
    }
}