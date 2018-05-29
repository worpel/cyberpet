class bunny {
    constructor(name) {
        this.name = name;
        this.hops = 0;
    }
}

const Navi = new bunny('Navi');

const Sherlock = new bunny('Sherlock');

console.log(Navi.name);

class cars {
    constructor(manufacturer, model, colour) {
        this._manufacturer = manufacturer;
        this._model = model;
        this._colour = colour;
        this._state = 'static';
    }

    accelerate() {
        this._state = 'driving';
    }

    brake() {
        this._state = 'static';
    }

    turning() {
        this._state = 'turning';
    }

    beeping() {
        this._state = 'beeping';
    }
}

class animal {
    constructor(name) {
        this._name = name;
        this._hunger = 60;
    }

    get name() {
        return this._name;
    }

    get hunger() {
        return this._hunger;
    }

    eat() {
        this._hunger--;
    }
}

class bunny extends animal {
    constructor(name, lovesCarrots) {
        super(name);
        this._lovesCarots = lovesCarrots;]
}
}