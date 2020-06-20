'use strict';

function name(){

}

// Function Declaration - Объявление функции.
/*
    Все предыдущие функции мы объявляли через FD
*/


// Function Expression (Фукциональные выражения)


let sayHi = function(){
    console.log('Привет');
};

sayHi();


let copySayHi = sayHi;

copySayHi();



// Функции-коллбеки

/* Процесс передачи функции как значения */

function ask(question, yes, no){
    if(confirm(question)){
        yes();
    }else{
        no();
    }
}

function showOk(){
    console.log('Вы согласны');
}

function showCancel(){
    console.log('Вы не согласны');
}

ask( 'Пойдем гулять?', showOk, showCancel);

ask( 'Купишь мороженное?', function(){console.log('Да');}, function(){console.log('Нет');});


// Различия между FD и FE

/*
    FE создается, когда выполнение кода доходит до нее и в последствии может 
    использоваться (запускаться).

    FD может использоваться сразу во всем скрипте.

    При строгом режиме (use strict), когда FD находится в блоке {...}, эта функция
    доступна только внутри этих скобок.

 */

let age = 19;

if( age >= 19 ){

    function welcome(){
        console.log('Добро пожаловать');
    }

    welcome();
}


let copyWelcome;

if( age >= 19 ){

    copyWelcome = function(){
        console.log('Добро пожаловать');
    }

    copyWelcome();
}

copyWelcome();



// Стрелочные функции

let sum = (a, b) => a+b;

console.log( sum(55, 12) ); // 67

// Тело стрелочной функции сразу возвращает результат выражения (Встроенный return)

// Если использовать только 1 параметр, то можно не ставить скобки

let double = n => n*2;

console.log( double(10) ); // 20

// Если же аргументов у функции нет, то обязательно нужно указать пустые скобки

let sayHello = () => console.log('Привет');

sayHello();


// Многострочные срелочные функции

let sum2 = (a, b) => {
    let result = a + b;
    return result;
};

/**
 * В многострочных стрелочных функциях автоматический return не работает. 
 * Его нужно объявлять в ручную
 */

console.log( sum2(10, 15) );


// Тип данных Объект

let user = new Object();

let user2 = {}; // Литеральная нотация или литерал объекта

let user3 = {
    name : 'Иван',
    age : 24,
    height : 180
};

// Свойства объекта также называют полями объекта



// Получение или обращение к свойствам объекта

console.log( user3.name ); // Иван

console.log( user3 ); // Выведет все поля объекта, но только 1 уровня вложенности


// Если название свойства состоит из нескольких слов, то название нужно брать в кавычки

let user4 = {
    'user name' : 'Петр',
    'home address' : 'Полтава'
};

console.log( user4['home address'] );

/*
    Чтобы обратиться к свойству с названием из 2 и более слов, нужно соблюдать такой 
    синтаксис: имя_объекта['Название_свойства']

    Также этот способ позволяет обратиться к свойству передав название как переменную
*/


let option_name = 'home address';

console.log( user4[option_name] );


// Вычисляемые свойства

let fruit = prompt('Какой фрукт купить?', 'Apple');

let bag = {
    [fruit] : 5
};

console.log( bag );



// Удаление из объекта

delete user3.height;

console.log( user3 );


// Добавление свойства в объект

user3.isAdmin = true;

console.log( user3 );

user3['full weight'] = 100;



// Проверка не существование свойства

let user5 = {
    age : 18
};

if(user5.name === undefined){
    console.log('Такого свойства нет');
}

if( 'name' in user5 ){
    console.log('Такое свойство есть');
}else{
    console.log('Такого свойства нет');
}


//Цикл for ... in

/*
    Нужен для перебора свойств объекта

    for(key in object){

    }

    key - это переменная, куда на каждой итерации будет попадать имя текущего свойства
    object - имя объекта, который перебирается
*/

for(let key in user3){
    console.log( key + ' : ' + user3[key] );
}




// Метод объекта, this

let car = {
    name : 'Порш',
    maxSpeed : 200,
    'current distance' : 0,
    drive : function (){
        this['current distance'] +=100;
        console.log( this['current distance'] + ' расстояние' );
    }
};

car.drive();

car.drive();

car.drive();


car.stop =  function(){
    console.log( 'Машина остановилась' );
};

car.stop();

// У стрелочных функций нет this, поэтому они не будут работать внутри объекта.


// Преобразование объекта к примитивам

// При выводе в консоль или в alert объект преобразуется в строку

// Если объект преобразовать в число, то вернется NaN

console.log( +car );


let obj1 = {
    items : {
        0 : {
            name : 'Бургер',
            price : 100
        },
        1 : {
            name : 'Пицца',
            price : 200
        }
    }
};

obj1['items']['0']['name']; //Бургер