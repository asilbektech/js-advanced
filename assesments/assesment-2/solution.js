class Good {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

class Inventory {
    constructor() {
        this.goods = [];
    }

    addGood(good) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === good.id) {
                throw new Error("Good already exists in the inventory.");
            }
        }
        this.goods.push(good);
    }

    removeGood(id) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === id) {
                this.goods.splice(i, 1);
                break;
            }
        }
        throw new Error("Good not found in the inventory.");
    }
}

const inventory = new Inventory();

inventory.addGood(new Good(1, "Apple", 50, 0.5));
inventory.removeGood(new Good(2, "Banana", 30, 0.3));

console.log(inventory.addGood(new Good(1, "Apple", 50, 0.5)));
console.log(inventory.removeGood(new Good(2, "Banana", 30, 0.3)));
console.log(inventory.removeGood(new Good(2, "Banana", 30, 0.3)));
