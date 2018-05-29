let animalName = prompt('What do you want to name your animal?');
let chooseYourAnimal = prompt('Which animal do you want to select?').toLowerCase();
let currentClass;

const newAnimal = (currentAnimal) => {
    if (currentAnimal === 'dog') {
        let currentClass = new dog(animalName);
    } else if (currentAnimal === 'cat') {
        let currentClass = new cat(animalName);
    } else if (currentAnimal === 'rabbit') {
        let currentClass = new rabbit(animalName);
    } else {
        let newAnimal = prompt('You cannot select that animal. Choose either a dog, cat or a rabbit.')
        newAnimal(newAnimal)
    }
}

newAnimal(chooseYourAnimal);
console.log(currentClass.name);

class animal {
    constructor(name) {
        this._name = name;
        this._noise = 'noise';
        this._hunger = 0;
        this._thirst = 0;
        this._state = 'static';
    }

    get name() {
        return (this._name);
    }

    get noise() {
        return (this._noise);
    }

    get hunger() {
        return (this._hunger);
    }

    get thirst() {
        return (this._thirst);
    }

    get state() {
        return (this._state);
    }
}

class dog extends animal {
    constructor(name) {
        super(name);
        this._noise = 'Woof';
    }
}

class cat extends animal {
    constructor(name) {
        super(name);
        this._noise = 'Meow';
    }
}

class rabbit extends animal {
    constructor(name) {
        super(name);
        this._noise = 'Squeal';
    }
}

console.log(animal);