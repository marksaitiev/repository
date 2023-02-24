for (i = 20; i > 10; i--) {
    console.log(i);
    if (i === 14) {
        break;
    }
};

let i = 4;
do {
    i++;
    console.log(i);
}
while (i<10);
    
    
for (j=2; j<=10;j++) {
     if(j % 2 !== 0) {
        continue;
     } 
     console.log(j);
};



const obj = {
    name: ' john',
    age: 25
};
console.log(obj);


// MACUB

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

console.log(arrayOfNumbers);
return arrayOfNumbers;


let arr = [5,6,7,8,9,10];
console.log(arr);






let i = 2;
while (i <= 15) {
    i++;
    if (i % 2 === 0) {
    continue;
    } else {
    console.log(i);
    }
}




"use strict";
for (let i = 0; i < 3; i++) {
    console.log(`first lvl `);
    for(let j = 0; j < 3; j++) {
        console.log(`second lvl `);
        for(let k = 0; k < 3; k++) {
            if 
            console.log(`third lvl `);
        }
    }
};