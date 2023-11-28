export class Person {
    #birthday;

    constructor(firstName, lastName, birth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = birth;
        this.birthday;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get birthday() {
        let birth = this.#birthday;
        let partsBirth = birth.split('.');
        if (partsBirth[0] >=1 && partsBirth[0] <=12) {
            return this.#birthday;
        }
    }
}
