let array1 = [];
let array2 = new Array();
let array3 = new Array(10);

let Computer = ['CPU','DARM','SSD','Mouse']
console.log(Computer instanceof Array);
console.log(Array.isArray(Computer));

AddThead(Computer);
AddThead('Kevin');

function AddThead(titleArray){
  if(!Array.isArray(Computer)){
    return;
  }
}