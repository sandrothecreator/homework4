// FIRST

let array = [5, 25, 89, 120, 36];
array.push("javascript","python");
array.unshift("html","css");
console.log(array.length);

array.pop();
array.shift();
console.log(array);

// SECOND

let array2 = ["ფორთოხალი", "ბანანი", "მსხალი"];

console.log(array2.length);
array2.push("ვაშლი", "ანანასი");
array2.unshift("საზამთრო");

console.log (array2.length);

array2.splice(2, 0, "მანგო");

array2.pop();
array2.shift();
console.log(array2.length);

// THIRD 

let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, "a");
array3.splice(4, 0, "b");
array3.splice(5, 0, "c");

console.log(array3);

// FOURTH

let array4 = [1, 2, 3, 4, 5];

let sum = 0;
array4.forEach(function(i){
    sum += i;
})
console.log(sum);

// FIFTH

for (let i = 100; i > 0; i--) {
    console.log(i);
}
