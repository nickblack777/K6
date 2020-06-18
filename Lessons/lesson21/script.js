'use strict';

// Функции

function showMessage(){
    console.log('Функция выполнена!');
}

showMessage();

showMessage();


/*
    function имя_функции(){
        тело_функции;
    }

    имя_функции - должно содержать в себе сразу и действие и то над чем происходит это 
    действие.
    
*/


// Локальные переменные функции

/*
    Это переменные объявленные внутри тела_функции
    Эти переменные не доступны за пределами тела функции(за пределами фигурных скобок)
*/


function showMessageWithName(){
    let my_name = 'Иван';

    console.log( 'привет ' + my_name );
}

showMessageWithName();


// console.log( my_name ); - ошибка т.к. она не доступна за пределами функции


// Внешние переменные
// У функции есть доступ ко всем внешним переменным

let my_name = 'Петр';

function showMessaageWithName2(){
    console.log( 'привет ' + my_name );
}

showMessaageWithName2();


/*
    Помимо доступа к переменным - все что происходит с внешней переменной внутри функции
    сохраняется!!
    Т.е. если вы изменили значение переменной внутри выполнения функции, то оно запишется
    в переменную.
*/

let userName = 'Александр';

function changeName(){
    userName = 'Андрей';
}

console.log( userName ); // Александр

changeName();

console.log( userName ); // Андрей



let userName2 = 'Александр';

function changeName2(){
    let userName2 = 'Андрей';
}

console.log( userName2 ); // Александр

changeName2();

console.log( userName2 ); // Александр

/*
    Переменные объявленные внутри функции, являются самостоятельными и не связаны
    с внешними.
*/



// Параметры функций


function showChatMessage( nickname, message ){
    if(nickname && message){
        console.log( nickname + ' : ' + message );
    }
}

showChatMessage( 'Анна', 'Привет. Как дела?' );

let chatName = 'Валерий';

showChatMessage( chatName, 'Все хорошо' );


/*
    Параметры внутри функции видны как локальные переменные. Меняя их значение
    вы не меняете внешнюю переменную с таким же именем.
*/

// Параметры по-умолчанию

/*
    Параметры по-умолчанию объявляются после обязательных параметров.
*/

function showChatMessage2(nickname, message, premium = false){
    // premium = premium || 'текст по умолчанию';

    if(premium == true){
        console.log( nickname + '(Premium)' + ' : ' + message );
    }else{
        console.log( nickname + ' : ' + message );
    }
}

showChatMessage2( 'user1', 'Hello' );

showChatMessage2( 'UserKing777', 'Hi', true);



function c(text){
    console.log(text);
}

c('Привет');


// Возврат значения функции (return)

function sum(a, b){
    return a + b;
}

let result = sum( 10, 54 ); // 64 запишется в переменнуж result

c( sum(4, 93) ); // 97 выведется в консоль


/*
    При срабатывании return происходит то что при break в циклах.
    Но дополнительно return возвращает значение переданное в return
*/


function checkAge(age){
    if(age >= 18){
        return true;
    }
    return false;
}

console.log( checkAge(22) ); // true

/*
    return может использоваться и без значения. Тогда он сработает как break
    (просто завершит выполнение функции) и вернет undefined

    также undefined возвращает функция у которой нет return
*/ 

function doNothing(){}

c(doNothing()); // undefined

// Никогда не добавляйте перенос строки между return и значением!!!


/*
    Функции нужно создавать с условем, что одна функция выполняет какое-то одно действие.
    Даже есть функции будут выполняться вместе.

    Например 
    Функция showMessage выполняет 2 другие функции showName и showMessage
    Функция Стирать() будет содежрать выполнение функций -> залить_воду() ->
    засыпать_порошок() -> вращать_барабан() -> слить_воду() -> отжать()
    
    

*/









