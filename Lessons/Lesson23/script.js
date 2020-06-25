'use strict';

// Методы примитивов

let str = 'Привет';

console.log( str.toUpperCase() ); // ПРИВЕТ

/*
    Это функции, которые описаны в объектах примитивов и позволяют
    делать различные манипляции с этим объектом
*/


// Числа

let billion = 1e9; // 1 миллиард (1 и 9 нулей)

let ms = 1e-6; // 0.000001


// Шестнадцатиричная система

console.log( 0xff ); // 255

// Бинарная форма записи

let binary = 0b11111111; // 255

console.log( binary );

// Восьмеричная система

let octo = 0o377; // 255


console.log( binary == octo ); // true


// Метод toString(base) - возвращает строкове представление числа в указанной системе base

let number = 3455363;

console.log( number.toString(16) );


// Максимальная система исчисления 36



// Округление чисел

let number2 = 3.1;

console.log( Math.floor(number2) ); // 3 - округление в меньшую сторону

console.log( Math.ceil(number2) ); // 4 - округление в большую сторону

console.log( Math.round(number2) ); // 3 - округление до ближайшего целого

console.log( Math.trunc(number2) ); // 3 - удаляет дробную часть (Не поддерживается IE)


// Округление до x знаков

let number3 = 1.23456;

console.log( Math.floor(number3 * 100) / 100 ); // 123.456 -> 123 -> 1.23


// Метод toFixed(n) - округление числа до n знаков

let number4 = 12.34;

console.log( number4.toFixed(1) ); // '12.3'

let number5 = 12.36;

console.log( number5.toFixed(1) ); // '12.4'


/*
    После применения toFixed возвращает текст, а не число
    При округлении используется дополнительно функция round
    Если у числа после запятой меньше знаков, чем указано в toFixed, то 
    в результате будут добавлены нули в коце числа

*/

let number6 = 12.34;

console.log( number6.toFixed(6) ); '12.340000'



// Неточные вычисления

// Если число слишком большое, то оно вывдется как бесконечность

console.log( 1e500 ); // Infinity


console.log( 0.1 + 0.2 == 0.3 ); // false

console.log( 0.1 + 0.2 ); // 0.30000000000000004


// Способ 1

console.log( ( (0.1 * 10) + (0.2 * 10) ) / 10 ); //   0.3

// Способ 2

let number7 = 0.1 + 0.2;

console.log( +number7.toFixed(2) ); // 0.3

// Лучше использовать способ 2, т.к. 1 не идеален

console.log( (0.28 * 100 + 0.14 * 100) / 100 ); // 

console.log( 9999999999999999 );


// Проверка на бесконечность isFinite \ Проверка на нечисло isNaN

console.log( isNaN(NaN) ); // true

// Функция isNaN сначала преобразоывает переданные данные к числу и потом проверят на не число

let text = 'Привет';

console.log( isNaN(text) ); // true

// NaN не равен ничему даже себе

console.log( NaN === NaN ); // false


// isFinite проверят конечно ли число, если число бескончено то вернут false

console.log( isFinite('15') ); // true

// Сначала преобразует к числу и потом проверит на бесконечность

// Еще isFinite применяют для проверки наличия числа в тексте



// parseInt и parseFloat

// parseInt - отделяет число от текста в строке (cстрока должна начинаться с числа)

console.log( parseInt('100px') ); // 100

// parseFloat - работает также, но сохраняет еще дробную часть числа до 1 точки!!

console.log( parseFloat('12.5m') ); // 12.5

console.log( parseFloat('12.3.4dgsdf ') ); // 12.3

// Если переданный текст начинается не с числа, то функция вернет NaN

console.log( parseInt('a1234') ); // NaN

/* 
    У parseInt есть еще 2 параметр, в который можно указать систему исчисления
    отделяемого числа
*/

console.log( parseInt('ffst4534fweg', 16) ); // 255


// Math.random() - генерирует псевдослучайное число в диапазоне от 0 до 1( но не включая 1)

console.log( Math.random() );

console.log( Math.random() );


function getRandom(min, max){
    return Math.round( Math.random() * (max - min) + min );
}

console.log( getRandom(10, 100) );



// Math.max(a,b,c,d.....) \ Math.min(a,b,c,d....)

// Вычисляет максимальное и минимальное число из ряда

console.log( Math.max(4, 5, 44, 77, 321, 55) ); // 321

console.log( Math.min(4, 5, 44, 77, 321, 55) ); // 4


// Math.pow(n, power) - возвращает число n, возведенное в степень power

console.log( Math.pow(2, 10) ); // 1024



// Строки

let bigtext = `Привет
Как дела?
Хорошо`;

console.log( bigtext );


// Спецсимволы

/*
    \n - перенос строки
    Чтобы вставить в текст спецсимвол нужно поставить перед ним \ (обратный слеш) - 
    экранировать его

    \uXXX - для вставки unicode символов, вместо XXX код символа

*/

let str2 = 'Hello\nWor\'ld\\';

console.log( str2 );

console.log( '\u00A9' );

console.log( '\u{1F60D}' );


// Свойство - длина строки (length)


let str3 = 'dfsg3r2 f 4r 2g2 23g 24gefgdfg';

console.log( str3.length );

console.log( str3[5] );

console.log( str3.charAt(2) );

console.log( str3[str3.length-3] ); // d

/*
    Если символ по номер [x] отсутствует, то вернется undefined, а в случае с 
    charAt вернется пустая строка
*/

console.log( str3[100] ); //undefined

// Строку можно перебирать посимвольно с помощью for ... of

for( let char of str3 ){
    console.log( char );
}

// Строки неизменяемые - Нельзя поменять значение символа в строке, обратившись к нему

// str3[10] = 'b';

/*
    Изменение регистра символов
    str.toUpperCase() - переводит в верхний регистр
    str.toLowerCase() - переводит в нижний регистр
*/


