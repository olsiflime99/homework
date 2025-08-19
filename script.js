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
    case '2':
    case '12':        
        console.log('Зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осень');
        break;
   default:
        console.log('Такого месяца нет');
        break;
}