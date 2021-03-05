let cars = ["audi","bmw", "lexus", "volkswagen", " porsche"];


for ( let i =2; i<5; i++ ) {
    console.log(cars [i],i);
}

// 2

let names = ["demetre","mariami", "nica", "mia", "li", " tatia" ];

for (let i=0; i<names.length; i++) {
    if ( names [i].length>3)
    {console.log(names[i])}
}

//  3

let number =[5,6,7,8,10,14];
 
for ( let i=0; i<number.length; i++){
    if (number[i] % 2 == 0){
        console.log(number[i]);
    }
}

 
for ( let i=0; i<number.length; i++){
    if (number[i] % 2 == 1){
        console.log(number[i]);
    }
}
 
 

// 4
let user = [ 'name', 'age', 25, 50, 'surname', [100,500] ];

console.log (user[5][1]);

// 5

var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };

  console.log(person.eyecolor);

//   6

let numbers = [5, 15, 77, 55];
 for (let i=0; i <numbers.length; i++){
     console.log(numbers[i]);
 }

 
//7

let ciprebi=[5, 25, 89, 120, 36];
ciprebi.push("javascript", "python");
ciprebi.unshift("html","css");
ciprebi.shift(0)
ciprebi.pop(9)

console.log(ciprebi);


// 8


let fruits=["ფორთოხალი", "ბანანი", "მსხალი"];

fruits.push("ვაშლი", "ანანასი");
fruits.unshift("საზამთრო");
fruits.splice(3,0,"მანგო");
fruits.shift(0)
fruits.pop(4)
console.log(fruits);




// 9

let car = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche", "bentley"];

for ( let i =3; i<7; i++ ) {
    console.log(car [i],i);
}

let newarry = car .slice(1,4)
 
console.log(newarry);






 

