// Assignment-2

function Pet(name, hunger, happiness) {
    this.name = name;
    this.hunger = hunger;
    this.happiness = happiness;
}

Pet.prototype.eat = function () {
    this.happiness++;
    if (this.hunger - 1 >= 0) {
        this.hunger--;
    }
};

Pet.prototype.play = function () {
    this.happiness += 2;
    this.hunger += 1;
};

Pet.prototype.sleep = function () {
    this.hunger++;
};

Pet.prototype.status = function () {
    if (this.hunger < 3) {
        return `${this.name} is really hungry`;
    }
    return `${this.name} is felling great!`;
};

Pet.prototype.getOlder = function () {
    this.happiness -= 1;
    this.hunger += 1;
};

Pet.prototype.introduce = function () {
    return `Hey I am ${this.name} and my happiness level is ${this.happiness}, hunger is ${this.hunger}`;
};

Pet.prototype.timeout = function () {
    const initialHappiness = this.happiness;
    this.happiness = 0;
    return `Hey my happiness was ${initialHappiness}, but now it is ${this.happiness}`;
};

const pet1 = new Pet("Bobik", 0, 10);
