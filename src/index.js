import {sum} from './sum';
import style from './css/index.scss';

console.log(sum(3,4));

const head = document.getElementById("demo"),
sumValue = sum(14,4);

head.innerHTML = `Wynik dodawania 24+4 = ${sumValue}`;

