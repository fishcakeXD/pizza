let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];

for (var i = 0; i < Cars.length; i++) {
    console.log(Cars[i]);
}
Cars.forEach(function (item,index) {
    console.log(index,item);
    
})

Cars.forEach((item,index)=>{
    console.log(`${index} ${item}`)
})


let friends =[];
let person1 ={
    id:1,
    name:"kevin",
    email:"kevin@gmail.com"
};
let person2 ={
    id:2,
    name:"Mary",
    email:"mary@gmail.com"
};

let person3 ={
    id:3,
    name:"john",
    email:"john@gmail.com"
};
friends.push(person1,person2);
friends.unshift(person3);
console.log(friends);
friends.pop()
console.log(friends);