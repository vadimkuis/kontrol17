import {Person} from "./person.js";

export class Worker extends Person {
    #rate = 1000;
    #days = 0;

    constructor(firstName, lastName, birth, position) {
        super(firstName, lastName, birth);
        this.position = position;
        this.addDays();
    }

    get Rate() {
        return this.#rate;
    }

    set Rate(value) {
        if (value > 1000) {
            this.#rate = value;
        } else {
            console.log('Ставка меньше нормы')
            this.#rate = 1000;
        }
    }

    get Days() {
        return this.#days;
    }

    set Days(value) {
        this.#days = value;
    }

    addDays() {
        Date.prototype.daysInMonth = function () {
            return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
        };
        let monthsDays = new Date().daysInMonth();
        if (this.Days > 0 && this.Days <= monthsDays) {
            return this.#days = this.Days;

        } else {
            return this.#days = 0;
        }
    }

    getSalary() {
        let birthMonth = this.birthday.split('.');
        let month = new Date().getMonth() + 1;
        if (+birthMonth[0] === +month) {
            return this.addDays() * this.Rate + (this.addDays() * this.Rate) * 0.10;
        } else {
            return this.addDays() * this.Rate;
        }
    }

    static whoWorkedMore(workers) {
        let coolWorker = new Worker(workers[0][0], workers[0][1], workers[0][2], workers[0][3]);
        coolWorker.Days = workers[0][5];
        workers.forEach(item => {
            let worker = new Worker(item[0], item[1], item[2], item[3]);
            worker.Days = item[5];
            if (coolWorker.addDays() < worker.addDays()) {
                return coolWorker = worker;
            }
        })
        console.log(`Больше всех отработал ${coolWorker.getFullName()}. Количество рабочих дней - ${coolWorker.Days}.`);
    }

    static whoIsYounger(workers) {
        let youngersWorker = [];
        let youngerWorker = new Worker(workers[0][0], workers[0][1], workers[0][2], workers[0][3]);
        workers.forEach(item => {
            let worker = new Worker(item[0], item[1], item[2], item[3]);
            if (youngerWorker.getAge() > worker.getAge() && youngersWorker[0].getAge() > worker.getAge()) {
                youngersWorker.splice(0, 1, worker);
                return youngerWorker = worker;
            } if (youngerWorker.getAge() === worker.getAge()) {
                youngersWorker.push(worker);
            }
        })
        youngersWorker.forEach(worker => {
            console.log(`${worker.getFullName()}. ${worker.getAge()}.`)
        })
    }
}