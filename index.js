import {Worker} from "./worker.js";


let workers = [
    ['Иван', 'Иванов', '03.05.2001', 'Веб-разработчик', 1200, 27],
    ['Федор', 'Федоров', '01.06.1996', 'Веб-дизайнер', 1300, 22],
    ['Елена', 'Николаенко', '11.05.2003', 'Веб-разработчик', 1150, 15],
    ['Павел', 'Тимофеев', '03.21.1989', 'Веб-разработчик', 1450, 26],
    ['Татьяна', 'Свиридова', '05.24.2003', 'Веб-дизайнер', 2150, 10],
]

workers.forEach(item => {
    let worker = new Worker(item[0], item[1], item[2], item[3]);
    worker.Rate = item[4];
    worker.Days = item[5];
    console.log(`${worker.getFullName()}. Заработал: ${worker.getSalary()} рублей`);
})

Worker.whoWorkedMore(workers);
Worker.whoIsYounger(workers);