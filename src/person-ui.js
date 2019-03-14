class PersonUI {

    constructor(personService) {
        this._personService = personService;
    }

    getByName(name) {
        return this._personService.getByName(name);
    }

    getAll() {
        return null;
    }

    checkNameExists(name) {

    }

    save(person) {

    }
}
