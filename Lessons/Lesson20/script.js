'use strict';

// Сравнение разных типов данных

// При сравнении разных типов JS приводит каждый з них к числу!!!

console.log( '2' > 1 ); // true

console.log( '01' == 1 ); // true

console.log( true == 1 ); // true


// Строгое равенство (===)

/*
    При строгом равенстве НЕ РАБОТАЕТ преобразование типов к числу, данные 
    сравниваются и по значению и по типу одновременно. Если типы разные, то
    всегда будет false
*/

console.log( true === 1 ); // false

console.log( 1 === 1 ); // true

console.log( '1' === '1' ); // true

/*
    Оператор равенства (==) не различает 0 и false, пустую строку и false.
*/


// Сравнение с null и undefined

console.log( null === undefined ); // false - они не равны т.к. у низ разные типы

console.log( null == undefined ); // true - т.к. они преобразуются в 0

// Странные результаты сравнения null и 0

console.log( null > 0 );  // false
console.log( null == 0 ); // false
console.log( null >= 0 ); // true


// Несравнимое значение undefined

console.log( undefined > 0 ); // false
console.log( undefined < 0 ); // false
console.log( undefined == 0 ); // false



// Взаимодействие с пользователем

// alert('Привет');

/*
    Модальное окно - это информационное окно, которое появляется поверх контента и не позволяет
    с ним взаимодействовать , пока это окно открыто.
*/


//prompt('Сколько тебе лет?', '18');

/*
    prompt( заголовок, значение_по_умолчанию );

    Это модальное окно, которое запрашивает у пользователя ввести данные.
    В результате подтверждения эти данные можно записать в переменную.

    Если пользователь нажал Отмена или закроет форму, то форма вернет null

    Для кроссбраузерности желательно указывать значение по умолчанию хотябы пустое.

*/


//let text_from_user = prompt('Напишите сообщение', '');

//console.log( text_from_user );


/*
    confirm - модальное окно, которое спрашивает пользователя Да\Нет (Ok\Отмена)
    И в результате возвращает true\false
*/

//let question = confirm( 'Сегодня суббота?' );

//console.log( question );



// Оператор если (if)


let fruit = 'Апельсин';

if( fruit === 'Апельсин' ){
    console.log('Да там Апельсин');
}

// Все что происходит в круглых скобках приводит к булевому значению. 
// Если передать в скобки переменную, то она преобразуется в булевое значение.

if( fruit ){

}


if( fruit === 'Апельсин' ){
    console.log( 'Да Апельсин ');
}else{

}


if( fruit === 'Апельсин' ){

}else if( fruit === 'Яблоко' ){

}else if( fruit === 'Банан' ){

}else{

}


let year = 2019;

if( year < 2016 ){
    console.log( 'Слишком рано' );
}else if( year > 2016 ){
    console.log( 'Слишком поздно' );
}else{
    console.log( 'В точку' );
}


// Проверка закончится на моменте верного условия.


let accessAllowed = null;

let age = prompt('Сколько лет?', '');

if( age >= 18 ){
    accessAllowed = true;
}else{
    accessAllowed = false;
}

console.log( accessAllowed );



// Условный оператор (?) - тернарный оператор


/*
    let result = условие ? значение1 : значение2;
*/

accessAllowed = (age >= 18) ? true : false;


let message = ( age < 3 ) ? 'Здравствуй малыш!' :
              ( age < 18 ) ? 'Привет' :
              ( age < 100 ) ? 'Здравствуйте' :
              'Какой необычный возраст';

console.log( message );


// Оператор ИЛИ ( || )


/*
    Оператор ИЛИ Позовляет делать конструкции проверок в которых может быть несколько
    условий одновременно

    Оператор ИЛИ находит первое истинное значение.  (Запинается на истине)
*/

let items = 9;

if( items > 10 || items < 10 ){
    console.log( 'Верно' );
}else{
    console.log( 'Не верно' );
}

console.log( null || 1 ); // Выведется 1, т.к. 1 это true

console.log( 1 || 0 ); // выведется 1 т.к. запнется на истине



// Оператор И (&&)

// Оператор И находит первое ложное значение (Запинается на лжи)

console.log( true && false ); // false
console.log( false && false ); // false
console.log( false && true ); // false
console.log( true && true ); // true


let hours = 12;
let minutes = 30;


if( hours == 12 && minutes == 30 ){
    console.log( 'Alarm' );
}




// Прерывание цикла (break)

let number5 = 0;


while(true){
    let value = +prompt('Введите число', '');

    if(!value){
        break;
    }

    number5 += value;
}

console.log( number5 ); // Сумма введенных чисел



// Переход к соелующей итерации (continue)


/*
    continue - это облегченная версия break. При ее выполнении цикл не останавливается,
    а переходит с текущей итерации на заканчивая ее к следующей.
*/


for( let i = 0; i < 10; i++ ){

    if( i%2 == 0 ){
        continue;
    }

    console.log( i );

}


/*
    break и continue нельзя использовать в тернарнои операторе.
*/



// Конструкция switch


/*
    Конструкция switch заменяет собой сразу несолько if
*/

let n = 3;

switch( n ){
    case '3' :
        console.log('Не тот тип');
        break;
    case 3 :
    case 4 :
        console.log('Маловато');
        break;
    case 5 :
        console.log('В точку');
        break;
    case 6 : 
        console.log('Перебор');
        break;
    default :
        console.log('нет такого значения');
}

/*
    Кейсы записанные один под другим - называются группировкой кейсов. Обычно они
    выполняют одно и то же действие.

    Значения в switch сравниваются по строгому равенству.
*/






