class Person {

    constructor(age, name) {
        this._age = age;
        this._name = name;
    }

    get age() {
        return this._age;
    }

    get name() {
        return this._name
    }

    birthDay() {
        this._age++;
    }
}

module.exports = Person;
