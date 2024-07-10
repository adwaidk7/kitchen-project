let name = "adwaud";
// console.log(name)

let num1 = 10;
let num2 = 10;
let result = num1 + num2;
// console.log(`the sum of 2 number is ${result}`)

// Terminal Literals
// `${}`

//array syntax

//let haello= ["adwaud","peper","jiy","kiop"]
//haello[3]="curry";
//console.log(haello)

let car = "benz";
let car1 = "bmw";
let car3 = "honda";
car3 = "newcar";
car1 = "lambo";
// console.log(car1)

// let haello= ["adwaud","peper","jiy","kiop"]
//let alLi= document.querySelectorAll("li")
//alLi[0].innerText=haello[0]
// alLi[1].innerText=haello[1]
// console.log("alLi")

let kichen = document.getElementById("kitchen");
let hellopowder = ["salt", "pickle", "orange", "mango", "helo"];

//method 1
// for(let powder of hellopowder){
// let ol=document.createElement("ol")
//  ol.innerText=powder
//  kitchen.appendChild(ol)
//  console.log(ol)
// }
// method 2

// foreach()
//hellopowder.forEach(function(){
//console.log(powder)
//});

// 1 push(). 2 pop().3 shift(). 4 unshift()

// step 1 : find all the list items here

//let allListItems = document.querySelectorAll("li");
//let powderarray=[]

// step 2 : itterate all list items

//allListItems.forEach(function(ListItems){
//let allListItems=ListItems.innerText
// step 3 : push all list item content to a new array
// powderarray.push(hello)
//})
//console.log(allListItems)

function goodbenz(powder) {
  console.log("step 1: find a car");
  console.log("step 2: tire");
  console.log("step 3: alloy");
  console.log("step 4: benz");
}

function goodbmw(powder) {
  console.log("step 1: find a car");
  console.log("step 2: tire");
  console.log("step 3: alloy");
  console.log("step 4: bmw");
}

function goodaudiorbenzorbmw(powder) {
  console.log("step 1:find a car");
  console.log(`step 2:tire`);
  console.log("step 3:alloy");
  console.log(`step 4:${powder}`);
}
goodaudiorbenzorbmw("bmw");
goodaudiorbenzorbmw("benz");
goodaudiorbenzorbmw("audi");
