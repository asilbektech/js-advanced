// Assignment-3

function Pokemon(name, type, level, hp) {
    this.name = name.toUpperCase();
    this.type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
    this.level = level;
    this.hp = Math.floor(2.25 * this.level);
}

Pokemon.prototype.levelUp = function () {
    this.level++;
    this.hp = Math.floor(2.25 * this.level);
    return this;
};

Pokemon.prototype.faint = function () {
    if (this.hp <= 0) {
        return true;
    }
    return false;
};

Pokemon.prototype.revive = function () {
    this.hp = Math.floor(2.25 * this.level);
    return this;
};

Pokemon.prototype.call = function () {
    const vowels = ["A", "E", "I", "O", "U"];
    let nickname = this.name;
    let vowelCount = 0;

    for (let i = 0; i < this.name.length; i++) {
        if (vowels.includes(this.name[i])) {
            vowelCount++;
            if (vowelCount === 2) {
                nickname = this.name.slice(0, i + 1);
            }
        }
    }
    return nickname + "-" + nickname;
};

let pikachu = new Pokemon("PIKACHU", "Electric", 10);
let bulbasaur = new Pokemon("bulbasaur", "leaf", 11);
let onyx = new Pokemon("onyx", "rock");

console.log(pikachu);
console.log(bulbasaur);
console.log(onyx);

pikachu.hp -= 5; // Pikachu got attacked!

console.log(pikachu.faint()); // false
console.log(pikachu.revive());
console.log(pikachu.levelUp());
console.log(pikachu.call());
console.log(bulbasaur.call());
console.log(onyx.call());

// part3

Pokemon.prototype.availableMoves = function () {
    const maxLevel = 50;
    const fraction = this.level / maxLevel;
    const numMoves = Math.max(1, Math.ceil(fraction * this.moves.length));
    return this.moves.slice(0, numMoves);
};

Pokemon.prototype.attack = function (opponent, moveName) {
    let selectedMove = this.moves[0];
    if (moveName) {
        selectedMove = this.moves.find((move) => move.name === moveName);
    }

    if (!selectedMove) {
        selectedMove = this.moves[0];
    }

    const damage = selectedMove.damage;
    opponent.hp -= damage;

    console.log(`${this.name} attacked with ${selectedMove.name}!`);
    console.log(`Damage to ${opponent.name}: ${damage}`);
    console.log(`${this.name} hp: ${this.hp}`);
    console.log(`${opponent.name} hp: ${opponent.hp <= 0 ? 0 : opponent.hp}`);
};

let electricTypeMoves = [
    { name: "Tackle", damage: 3 },
    { name: "Thunder Shock", damage: 4 },
    { name: "Charge Beam", damage: 5 },
    { name: "Thunder Wave", damage: 5 },
    { name: "Spark", damage: 7 },
    { name: "Thunder Punch", damage: 8 },
    { name: "Shock Wave", damage: 10 },
    { name: "Thunder Bolt", damage: 15 },
    { name: "Thunder", damage: 20 },
    { name: "Zap Cannon", damage: 30 },
    { name: "Electric Beam", damage: 35 }
];

let leafTypeMoves = [
    { name: "Absorb", damage: 2 },
    { name: "Tackle", damage: 3 },
    { name: "Bullet Seed", damage: 4 },
    { name: "Mega Drain", damage: 6 },
    { name: "Vine Whip", damage: 8 },
    { name: "Razor Leaf", damage: 15 },
    { name: "Giga Drain", damage: 18 },
    { name: "Seed Bomb", damage: 22 },
    { name: "Petal Dance", damage: 25 },
    { name: "Solar Beam", damage: 35 }
];

let rockTypeMoves = [
    { name: "Tackle", damage: 3 },
    { name: "Rollout", damage: 6 },
    { name: "Rock Blast", damage: 4 },
    { name: "Smack Down", damage: 10 },
    { name: "Rock Throw", damage: 20 },
    { name: "Rock Slide", damage: 30 },
    { name: "Head Smash", damage: 40 },
    { name: "Rock Wrecker", damage: 50 }
];
console.log(pikachu.faint(rockTypeMoves));
console.log(pikachu.levelUp(leafTypeMoves));

// Class

// class Pokemon {
//     constructor(name, type, level, hp) {
//         this.name = name.toUpperCase();
//         this.type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
//         this.level = level;
//         this.hp = Math.floor(2.25 * this.level);
//     }

//     levelUp() {
//         this.level++;
//         this.hp = Math.floor(2.25 * this.level);
//         return this;
//     }

//     faint() {
//         if (this.hp <= 0) {
//             return true;
//         }
//         return false;
//     }

//     revive() {
//         this.hp = Math.floor(2.25 * this.level);
//         return this;
//     }
// }
