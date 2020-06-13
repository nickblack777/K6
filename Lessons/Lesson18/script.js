'use strict';

let message = 'Hello';

console.log(message);

let box;

message = 10;

console.log(message);


let user = 'John', age = 20, height = 180;

let user2;

user2 = user;

console.log(user2);


const COLOR = '#fff';



// Типы данных

let number = 20; // Целое число

let number2 = 34.234; // Число с плавающей точкой

console.log( 1 / 0 ); // Infinity

console.log( -1 / 0 ); // -Infinity

// Если мы не число делим на число, то получится NaN (Not a Number)

console.log( 'текст' / 10 );  // NaN


// Тип данных Строка (String)

let text = "Привет";
text = 'Привет';

text = `${text} Андрей`; // text + ' Андрей';

console.log(text);

let x = 10, y = 20;

console.log( `${x + y} человек` );


// 'f', ' ' - это строки в отличе от других некоторых языков.


// Тип данных - Булевый (логический) тип (Boolean)

// Поддерживает 2 типа значений - true/false (правда/ложь)

let emailChecked = true;

let isGreater = 4 > 1;

console.log(isGreater); // true


// Специальное значение - null

/*
    Не относится ни к одному типу данныхи представляет собой 'ничего', 'пусто', 
    'Значение не известно'
*/  

let weight = null;


// Специальное значение undefined

/*
    Также не относится ни к одному типу данных. Если объявлена переменная
    и в нее ничего не записано, то в ней хранится значение undefined
*/

let z;

console.log(z); // undefined

/*
    Рекомендуется использовать null для определения пустой переменной, а
    undefined будет показателем, что в переменную ничего не записывалось.
*/

/*
    Все типы описанные выше - это примитивы.

    Тип данных Объект (object) - особенный тип данных, который может хранить в себе
    сразы все типы данных.

    Тип символ (symbol) - используется для уникальных идентификаторов переменных.
*/


/*
    Оператор typeof - нужен для определения типа данных аргумента, либо данных в переменной
*/

console.log( typeof 0 ); // number

console.log( typeof z ); // udefined

console.log( typeof null ); // object - это ошибка в языке программирования



// Строковое преобразование

let value = true;

console.log( typeof value );  // Boolean


value = String(value); // 'true'


// Числовое преобразование

/*
    Числовое преобразование  срабатывает, когда в выражении участвуют числа или
    происходит математическое действие
*/

console.log( '6' / '2' ); // 3

let text_number = '123';

let number3 = Number(text_number); // 123


console.log( Number('привет') ); // NaN


/*
    undefined > NaN
    null > 0
    true > 1
    false > 0
*/



console.log( Number('        124           ') ); // 124

/*
        Number('123n') > NaN

        1 + '2' = '12'
        1 + 'nn' = '1nn'

        Если один из операндов строка при сложении, то произойдет конкатенация строк
        (Присоединение)
*/


// Логическое преобразование

/*
    Значение типа '' (пустые кавычки), пустая строка, null, undefined и NaN
    преобразуются в false, а все остальные в true.

*/

console.log( Boolean(1) ); // true

/*
    Boolean(0) > false
    Boolean('0') > true
    Boolean(' ') > true
*/


// Операторы
/*
    Операнд - это то к чему применятся оператор. (Например 1 + 2)
    Унарный оператор - это когда оператор применятся только к 1 операнду
    ( -1 )
    Бинарные операторы - когда оператор применяется в 2 операндам (1 + 2)
    Тернарный оператор - когда оператор применяется к 3 операндам
*/

let number4 = 1;

number4 = -number4; // унарный оператор /  -1

number4 = 2 - 1; // бинарный оператор /  1

// Сложение строк (бинарный +)

let text2 = 'Привет' + 'Василий';

console.log( text2 );

console.log( 2 + 3 + '1' ); // '51'

console.log( '2' - 1 ); // 1

console.log( '6' / '2' ); // 3



// Преобразование к числу (унарный +)

let number5 = 1;

console.log( +number5 ); // 1 (не влияет на положительное число)

number5 = -1;

console.log( +number5 ); // -1

console.log( +true ); // 1 (произойдет преобразование к числу) 
// Это все равно что написать Number(true)

console.log( +'' ); // 0 (Пустая строка равна нулю)

console.log( +'число' ); // NaN (все что не число  = NaN)



let apples = '2';

let oranges = '4';

console.log( apples + oranges ); // 24

console.log( +apples + +oranges ); // 6

