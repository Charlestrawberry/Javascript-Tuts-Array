//Learning asynchronous JS

console.log(" I ");

console.log(" LOVE ");

console.log(" TO  ");


  console.log(" EAT ");


console.log(" ICECREAM ");

setTimeout(() => {
    console.log(" I WAS DELAYED 4s using setTimeout func");
  }, 4000);

//One of the type of Async is Callback meaning you call a function inside another function as an argument

function one(  three){
    three();
    console.log("step 1 complete. Pls, call step 2")
    
  }
  
  
  const three = () =>{
    console.log("step 2")
  }
  
  
  one(three);

  //ANother Example

  let order = (production)=> {
    console.log('order placed, please wait for production')
    production();
  };
  
  let production = ()=> {
    console.log('order received and will soon be served')
  };
  
  order(production);
  
  //A bit diversion to arrays


  /*document.write(`I HATE U`) 

  

  let Vegetable = ['lettuce', 'brocolli', 'centrion', 'chocolate', 'peanuts', 'lemon'];
  let Vegies = [1, 2, 3, 4, 5, 6];

  let sum = 0;

  document.write("<ul>")
for(let e = 0; e <= 5; e++) {
document.write("<li>" + Vegies[e], "<br>" + "<br>" + "</li>" );
  sum = sum + Vegies[e]
} 
document.write("</ul>")
document.write(`total : ` + sum)*/


//Create array Method--- using Array() 
 
/*let array = [1, 2, 3, 4, 5, 6]; */


//is same as:  let array = new Array(1, 2, 3, 4, 5, 6)
//supposing we dont assign any value e.g. 
/*
let array = new Array(5); //result would be undefined {

array[0] = 12
array[1] = "Charles" 
array[2] = true
array[3] =  {}
array[5] = null


for(let i = 0; i < 5; i++){
  document.write("<li>" + array[i], "<br>" + "<br>" + "</li>" );
  //array[i] = prompt("Enter your value aboki");
}
*/

//USING JS MULTI ARRAYS LESSONS

// let multiArray = [
//   ['Latin', 21, 'centrion'],
//   ['Kiki', 25, 'Goof'],
//   ['Hyuhs', 45, 'HYuh']
// ]
let multiArrays = Array(5);
multiArrays[0] = ['Latin', 21, 'centrion'],
multiArrays[1] = ['Juggy', 21, 'centrion'],
multiArrays[2] = ['Kiki', 25, 'Goof'],
multiArrays[3] = ['Hyuhs', 45, 'HYuh']



for( let g = 0; g <= 5; g++){
  delete multiArrays[2];
  multiArrays[2] = ['Kahala', 25, 'Goof'],

console.log(multiArrays[g]) ; 
   
}

// THERE ARE 24 TYPES OF array mthd array()

/*
sort()        slice()       find()
reverse()     splice()      findindex()
pop()         isArray()     includes()
push()        indexOf()     some()
shift()       lastindex()    forEach()
unshift()     concat()        every()
entries()     valueOf()       join()
toString()    filter()      fill()

*/

//to use SORT to arrange array in alphabetic or right order
let arrays = 
 ['Smith', 'Evarian', 23, 'Qudus', 'Faith'];

  arrays.sort();
  console.log(arrays); 
   //to use REVERSE to arrange array in alphabetic or right order

  arrays.reverse();  
  console.log(arrays);
  
  //pop() to remove an item from the back of the array... push() does the opp

  arrays.pop()
  console.log(arrays);

  arrays.push([2], 'rush')
  console.log(arrays);

  //shift() removes an item frm the begining f an array and unshift() adds an item to the begining


  arrays.shift();
  console.log(arrays); 
    
  setTimeout(() => {
    arrays.unshift('Michael');
  console.log(arrays);
  }, 2000);

  //concat works almost like the push() however it joins two arrays together
let arrayys = 
['Smith', 'Evarian', 23, 'Qudus', 'Faith'];


let ary = arrayys.concat(["Yul", "Gavi"])
console.log(ary);

//join( ) helps to add space, - ,/ etc
let arys = arrayys.join(" / ")
console.log(arys);

//slice() is used to slice out items f array
//['Smith', 'Evarian', 23, 'Qudus', 'Faith', "Gavi"];
//e.g slice(2) will slice "smith" and "Evaraian" output will be

let arraays = 
 ['Smith', 'Evarian', 23, 'Qudus', 'Faith', "Gavi"];


 let a = arraays.slice(2);
 console.log(a);// output; [ 23, 'Qudus', 'Faith', "Gavi"];

 //will remove all items apart from index (1, 2);
 let b = arraays.splice(1, 2)
 console.log(b);

 //isArray() is used to identify if value is an array
 console.log(Array.isArray(b))

 if (Array.isArray(b)){
      console.log('YES A true ARRAY')
 }else{
  console.log('No array found Dawg')
 }

 //indicates if the item is in the array
let c = arraays.includes('Cup')
console.log(c);

//Array filter()
let ages = 
 [12, 23, 34, 18, 17, 15];

// array filter functions to sieve items out. 
 let d = ages.filter(carReg);
console.log(d);

function carReg (ages) {
  console.log(ages >= 18);
}

//to turn array object to string.. toString()

let fort = [
  'yoghurt', 'Everest','Iphone','Goat','Osimhen','Gavi'
];

fort.toString();
console.log(fort.toString()); //yoghurt,Everest,Iphone,Goat,Osimhen,Gavi

//to replace all index fill()

let forte = [
  'Smith', 'Evarian','Qudus','Faith','Yul','Gavi'
];

forte.fill("Boss");
console.log(forte); //[ 'Boss', 'Boss', 'Boss', 'Boss', 'Boss', 'Boss' ]

//forEach to print out index singly

let g = [
  'Smith', 'Evarian','Qudus','Faith','Yul','Gavi'
];

g.forEach(function (item, index){
  console.log(item + ":" + " " + index);
}); //print--->   
//Smith: 0
// Evarian: 1
// Qudus: 2
// Faith: 3
// Yul: 4
// Gavi: 5

//objects tutorial

let obj = {
  firstName:"Charles",
  car: "Ford",
  address: {
    "city": "Ilasa",
    "State": "Lagos"
  },
  age: 34,
  gender: "male",
  p_lang: ["java", "php", "python"],
  prop: function one(){
    setTimeout(() => {
     console.log("Trying OUt something")// print: Trying OUt something
    }, 2000);
  }, 
  
  func: function(){
    console.log(this.firstName + " " + this.car) //print: Charles Ford
  }
}
 

console.log(obj.prop(), obj.func());
console.log(obj.address.city)// print: Ilasa

//creating new object() same as array learnt earlier. case sensitive. start with uppercase Object()}

let person = new Object();

person.firstName = "Charles";
person.car = "ford";
person.age = "age";

console.log(person);// print: { firstName: 'Charles', car: 'ford', age: 'age' }
console.log(person.firstName) //print: Charles or 
console.log(person["firstName"])

//Array of Objects 

var staff = [
  {name: 'Lawal', subject: 'Biology'},
  {name: 'Bose', subject: 'Math'},
  {name: 'Faith', subject: 'Geography'}
];

console.log(staff);//{name: 'Lawal', subject: 'Biology'},
// {name: 'Bose', subject: 'Math'},
// {name: 'Faith', subject: 'Geography'}

for (let i = 0; i<3; i++){
  console.log(staff[i].subject);//"Biology"
  // "Math"
  // "Geography"
}

//JS const var with Array and Object

const staffy = [23, 45, 49];

//to change the value of the index
staffy[2] //this will chnage the second index 49
= 'bye';
console.log(staffy) //[23,45,"bye"]

//Likewise to same goes for changing the value of an object

const staffi = {name: 'Slaver', car: "Ford"};

staffi.name = 'Xavier'
console.log(staffi ) 
//print // [object Object] 
// {
//   "name": "Slaver",
//   "car": "Ford"
// }

//loop tutorial 
//Javascript For in loop

let data = {
  fname: "Charles",
  lname: "Oduks ",
  Age: 34
}

for (let i in data){
  console.log(i + ": " + data[i]);
}
// "fname: Charles"
// "lname: Oduks "
// "Age: 34"

let arry = [34, 36, 19, 19]

var za = arry.map(maptest)

console.log(za)
function maptest (a){
  return a * 10;
}//[340,360,190,190]

let araymap = [
    {fname: "Futia", age: 54},
 {fname: "Zainab", age: 34, },
  {fname: "Toore", age: 46,
}
]
let sa = araymap.map(test2);
console.log(sa);
function test2(arg){
  return arg.fname;//["Futia","Zainab","Toore"]
}


/////////////

// const x = ["Hello World", "cammer"];

// y = x.split(" and ")

// console.log(y)



