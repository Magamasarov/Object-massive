////Задачи

////1
// let arr = ['Привет, ', 'мир', '!'];
// let phrase = arr.join('');
// console.log(phrase);  

////2
// let arr = ['Привет, ', 'мир', '!'];
// let text = arr.join('');
// console.log(text);  

////3
// let arr = ['Привет, ', 'мир', '!'];
// arr[0] = 'Пока, ';
// console.log(arr);  

////4
// let obj = {
//     'Петя': 1000,
//     'Коля': 1500
//   };
  
//   console.log(obj['Петя']);
//   console.log(obj['Коля']);

////5
// var arr = {
//     'ru': ['голубой', 'красный', 'зеленый'],
//     'en': ['blue', 'red', 'green']
// };
// console.log(arr['ru'][1]);



////Работа с массивами

////1
// let arr = ['a', 'b', 'c'];
// alert(arr);

////2
// let arr = ['a', 'b', 'c'];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

////3
// let arr = ['a', 'b', 'c', 'd'];
// let result = arr[0] + "+" + arr[1] + ", " + arr[2] + "+" + arr[3];
// alert(result);

////4
// let arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + arr[2] * arr[3];
// alert(result);


////Объекты (ассоциативные массивы)

////1
// var obj = {a: 1, b: 2, c: 3};
// console.log(obj['c']);
// console.log(obj.c); 

////2
// var obj = {Коля: '1000', Вася: '500', Петя: '200'};
// console.log(obj['Петя']);
// console.log(obj['Коля']);

////3
// var daysOfWeek = {
//     1: 'понедельник',
//     2: 'вторник',
//     3: 'среда',
//     4: 'четверг',
//     5: 'пятница',
//     6: 'суббота',
//     7: 'воскресенье'
//   };
  
//   var currentDate = new Date();
//   var currentDayNumber = currentDate.getDay();
//   var currentDay = daysOfWeek[currentDayNumber + 1]; 

//   console.log(currentDay);

////4
// var daysOfWeek = {
//     1: 'понедельник',
//     2: 'вторник',
//     3: 'среда',
//     4: 'четверг',
//     5: 'пятница',
//     6: 'суббота',
//     7: 'воскресенье'
//   };
  
//   var day = 3; // Например, если переменная day содержит число 3
  
//   var dayOfWeek = daysOfWeek[day];
//   console.log(dayOfWeek); // Выведет "среда"



////Многомерные массивы
////1
// var array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// var number = array[1][0]; 
// console.log(number); 

////2
// var myObject = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' };
// var result = myObject.js[0];

// console.log(result);

////3
// var daysOfWeek = {
//     'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// };


// var mondayInRussian = daysOfWeek['ru'][0];
// console.log(mondayInRussian);

// var wednesdayInEnglish = daysOfWeek['en'][2];
// console.log(wednesdayInEnglish);

////4
// var lang = 'ru';
// var day = 3;

// var daysOfWeek = {
//     'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// };


// if (daysOfWeek[lang] && day >= 0 && day < daysOfWeek[lang].length) {
//     var dayName = daysOfWeek[lang][day];
//     console.log(dayName);
// } else {
//     console.log('Некорректные значения lang или day.');
// }

