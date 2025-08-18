/* Задание 1 */
let password = String(prompt('Введите пароль'));
/*password = password.toLocaleLowerCase;   Почему то не работает */
switch (password) {
    case 'пароль':
    console.log('Пароль введен верно')
        break;
    default:
        console.log('Пароль введен не верно')
        break;
}
/* Задание 2 */
let c = 5;
if (c>0 && c<10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
/* Задание 3 */
let d = 20;
let e = 5;
if (d>100 || e>100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
/* Задание 4 */
let a = '2';
let b = '3';
let l = (Number(a) + Number(b));
alert(l);
/* Задание 5 */
let monthNumber = String(prompt('Напиши цифру месяца'));
switch (monthNumber) {
    case '1':
        console.log('Январь');
        break;
    case '2':
        console.log('Февраль');
        break;
    case '3':
        console.log('Март');
        break;
    case '4':
        console.log('Апрель');
        break;
    case '5':
        console.log('Май');
        break;
    case '6':
        console.log('Июнь');
        break;
    case '7':
        console.log('Июль');
        break;
    case '8':
        console.log('Август');
        break;
    case '9':
        console.log('Сентябрь');
        break;
    case '10':
        console.log('Октябрь');
        break;
    case '11':
        console.log('Ноябрь');
        break;
    case '12':
        console.log('Декабрь');
        break;
    default:
        console.log('Такого месяца нет');
        break;
}