//String
// you can use double or single claues both work same
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// String concatenation
// to merge or combine one string with other
let firstName = 'Brandon';
let lastName = 'Sanderson';
let fullName = firstName + ' ' + lastName;
console.log(fullName);



// getting Characters
// javascript counts from 0
// Use square bracket for it
console.log(fullName[2]);
//string length
console.log(fullName.length);

//string methods
// Paranthisis in the end ()
// when ever you see () in code line it means it is a function or method

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
// These methods donot alter or chnge is original value of variable
//but some do
console.log(result, fullName);
//tell index of @ ('@') is call argument
let index = email.indexOf('@');
console.log(index);
let result1 = email.lastIndexOf('n');
console.log(result1);
//Silce method
// In this the first argument is where you go from and second argument is where we go to.
let result2 = email.slice('0,10');

console.log(result2);

// Making a substring where two arguments represent slighty different things
let result3 = email.substr(4,10);

console.log(result3);

//Replace certain charter in string with other characters
//it onlu replace the first word 

let result4 = email.replace('m', 'w');

console.log(result4);

////////////////////////////////////////

//NUMBERS

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -. *, /, ** power of, % remainder

console.log(10/2);
let result5 = radius  % 3;

console.log(result5);

let result6 = pi * radius**2;
console.log(result6);

//order of operation - B I D M A S

let result7 = 5 * (10-3)**2;

console.log(result7);

let likes = 10;

//likes = likes + 1;
// or quick ways
//likes++
//likes += 10;
//likes -= 5;
//likes /= 2;
likes *= 2;
console.log(likes);

// NaN - not a number

console.log(5 / 'hello');

console.log(5 * 'hello');

let result8 = 'the blog has ' + likes + ' likes';
console.log(result8);

// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes2 = 30;

// concatenation ways

let result9 = 'The blog called ' + title + ' by ' + author + ' has ' + likes2 + ' likes ';

console.log(result9);

//Tempelate string 
// when we have alot vaible prefer to use tempelate string
let result11 = `The blog called ${title} by ${author} has ${likes2} likes`;
console.log(result11);

//creating html templates

let html = `
<h2>${title}</h2>
<p>by ${author}</p>
<span>This blog has ${likes2}</span>
`;

console.log(html);

// ARAY
// we store all values in one single variable 
// use to store data related to each other

let ninjas = ['shan', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas);
// console.log(ninjas[1]);

// let ages = [20, 25, 30 , 35];
// console.log(ages[2]);

// let random = ['shun', 'crystal', 30, 20];
// console.log(random);

// properties and methods
 console.log(ninjas.length);

 // array methods
// we can use - too
 let results = ninjas.join(',');
 console.log(results);

 let results1 = ninjas.indexOf('chun-li');
 console.log(results1);

 let results2 = ninjas.concat(['ken', 'crystal']);
 console.log(results2);

 // push method return the new length of new array
// also called disrukted dont distry but change
 let results3 = ninjas.push('ken');
 //return the value poped off the array
 let results4 = ninjas.pop();
 //console.log(results3);
 console.log(ninjas);

 console.log(results4);

 // NULL AND UNDEFINNED
// Undefined
 let age ;

 console.log(age, age + 3, `the age is ${age}`);

 //null
  let age1 = null;
  console.log(age1, age1 +3, `the age is ${age1}`);

  // Boolean

  // boolean & comparison
  console.log(true, false, "true", "false");

  //methos can return boolean;

  let email1 = 'luigi@thenetninja.co.uk';
  let names = ['mario', 'luigi', 'toad'];
  let results5 = email1.includes('@');
  let results6 = email1.includes('!');

  // it wil result true as luisi is a=inside the array but ig i type pther name it wil give false
let results7 = names.includes('luigi');
  console.log(results5);
  console.log(results6);
  console.log(results7);

  // comparison opearations

  let age3 = 25;

  // == are these things are true as is age is equal to 25
  console.log(age3 == 25);
  console.log(age != 30);
  console.log(age3 >= 20);
// abstract == 
  let name = 'shaun';
  console.log(name == 'shaun');
  console.log(name == 'Shaun'); 
  // check the grater or first letter of alphabet
  console.log(name > 'crystal');
  //In javascript lowecase letter are greater than uppercase

  let age4 = 25
  // different datatype but still equal
  console.log(age4 == 25);
  console.log(age4 == '25');

  // === is used for strict comparison
  console.log(age4 === 25);

  // but this will be false because in triple = it also checks it type
  console.log(age4 === '25');

  // type conversion
  // when we try to perform a calculation with sting it will not add a value ( 100 + 1 = 1001)
  let score = '100';
   
  console.log(score +1);

  // its better to do calculation with number

  let score1 = '100';
  score1 = Number(score1)
   
  console.log(score1 +1);
  //console.log(typeOf score1);

  let results8 = Number('hello');
  console.log(results8, typeof results8);

   let results9 = String('50');
   console.log(results9, typeof results9);

   // when we do boolean some values consided tru but some are false 
   // positive numbers are considered true and negative are also but 0 is false 
   let results10 = Boolean(100);
   console.log(results10, typeof results10);
// string of any lemngth are true but if it have no length then its alse
   let results11 = Boolean('0');
   console.log(results11, typeof results11);

   // 





   







  











