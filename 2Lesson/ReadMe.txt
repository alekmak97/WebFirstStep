JavaScript

Подключение скрипта
<script src="/scripts/script.js"></script>

let - создание динамической переменной (динамическая типизация)
let variable = ...

alert - NaN (не число), Infinity


let name = "Алевтина";
// Вставить переменную
alert('Hello, ${name}!');
alert('Res = ${2+2}');

let a = true
let b = false

let age = null; // underfined


Тип данных:
typeof 0 // "number"


Приём данных от пользователя
let test = prompt("Test");


Подтверждение
let right = confirm("Ты прав?");


Преобразование данных (все введённые данные - стринг)
let number = parseInt(prompt("Введите число:"));
alert(number+1);


Унарный оператор - перевод любого значения в числовое
alert(+true); // 1
alert(+""); // 0


IF-ELSE
if (year == 2022) {
    alert("OK");
} else {
    alert("not OK")
}

let accessAllowed = (age > 18) ? true : false;


|| - или, ! - не, && - и


while
let i = 0;
while (i < 5) { // выводит 0, затем 1, затем 2, 3, 4
    alert( i );
    i++;
}


do-while
let i = 0;
do {
    alert( i );
    i++;
} while (i < 5);


FOR
for (let i = 0; i < 5; i++) { // выведет 0, затем 1, затем 2, 3, 4
    alert(i);
}


SWITCH
switch (a) {
    case 3:
        alert( 'Маловато' );
    case 6:
        alert( 'В точку!' );
    case 7:
        alert( 'Перебор' );
    default:
        alert( "Нет таких значений" );
}



Function
function showMessage() {
    alert( 'Всем привет!' );
}
showMessage();
showMessage();

Локальные переменные
Это переменные, объявленные внутри функции, они видны только внутри этой функции, но не доступны в
основном теле программы.
function showMessage() {
    let message = "Привет, это Василий!"; // локальная переменная
    alert( message );
}

showMessage(); // Привет, я Василий!
alert( message ); // <-- в этом случае будет ошибка, т.к. переменная видна только внутри функции



Внешние переменные
Функция имеет доступ к внешним переменным, например:
let userName = 'Алевтина';
function showMessage() {
    let message = 'Привет, ' + userName;
    alert(message);
}
showMessage(); // Привет, Алевтина
Функция обладает полным доступом к внешним переменным и может изменять их значение.




