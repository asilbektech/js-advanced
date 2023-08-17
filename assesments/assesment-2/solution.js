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
                return this.goods.splice(i, 1);
            }
        }
        throw new Error("Good not found in the inventory");
    }

    updateGood(id, updatedGood) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === id) {
                return (this.goods[i] = updatedGood);
            }
        }
        throw new Error("Good not found in the inventory.");
    }

    viewGoods() {
        return this.goods;
    }

    searchGoodByName(name) {
        const matchedGoods = [];

        let i = 0;
        while (i < this.goods.length) {
            if (this.goods[i].name === name) {
                matchedGoods.push(this.goods[i]);
            }
            i++;
        }
        return matchedGoods;
    }
}

const apple1 = new Good(1, "Apple", 50, 0.5);
const banana = new Good(2, "Banana", 40, 0.6);
const orange = new Good(3, "Orange", 60, 1);
const inventory = new Inventory();
const updatedGood = new Good(1, "Apple", 60, 0.8);

inventory.addGood(apple1);

inventory.addGood(banana);
inventory.addGood(orange);

inventory.removeGood(2);
console.log(inventory.viewGoods());

inventory.updateGood(1, updatedGood);
console.log(inventory.viewGoods());

console.log(inventory.searchGoodByName("Apple"));
