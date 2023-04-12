let person = {
    name : "Kevin",
    age : 35,
    height : 180,
    weight : 80
};

console.log(person.name);
console.log(person['age'])

let keys = Object.keys(person);
let values = Object.values(person);

console.log(keys,values)

keys.forEach(key => {
    console.log(key,person[key]);
})


console.log(person);
console.log("The Object id :" + person);
console.log("The Object id : %o", person);

let jsonText = JSON.stringify(person);
console.log(jsonText);
console.log(typeof jsonText);
QWERTYUIOP[4]
let p = JSON.parse(jsonText);
console.log(p);
console.log(typeof p);
