//For of loops and objects (how the for of loops works conceptually)

//To begin, it's important to know that a for of loop cannot work on an object directly, 
//since an object is not iterable. 
//For example:
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}
//Running the above code snippet will throw the following error:  
//Uncaught TypeError: car is not iterable


//Contrary to objects, arrays are iterable. For example:  
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
//This time, the output is as follows:  
//red
//orange
//yellow


//BUILT-IN METHODS
//The Object.keys() method receives an object as its parameter. 
//Remember, this object is the object you want to loop over.
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']


//Another useful method is Object.values():
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

// Object.entries(), returns an array listing both the keys and the values.  
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); //[ ['speed', 400], ['color', 'magenta'] ]


//You now have all the ingredients that you need to loop over any object's own property keys and values.
//Here's a very simple example of doing just that:
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}