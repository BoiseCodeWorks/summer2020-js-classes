export default class Item {
    // quantity = 0;
    constructor(name, cost, modifier, auto) {
        this.name = name
        this.cost = cost
        this.modifier = modifier
        this.quantity = 0
        this.auto = auto
    }

    getButton() {
        return `<button>${this.name}</button>`
    }
}