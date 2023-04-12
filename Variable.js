var x =1;
let y =2;
const z =3;

{
    var x = 'JavaScirpt'
    let y ='Scc';
    const z = 'HTML'

    console.log(x);
    console.log(y);
    console.log(z);
    console.log('.'.repeat(60));
}
console.log(x);
console.log(y);
console.log(z);
let person = {
    "firstname": "Kevin",
    "gender": true,
    "height": 100,
    "email": "kevin@gmail.com",
    "city": {
        "通訊地址": "台北",
        "戶籍地址": "桃園"
    },
    "phone": {
        "市話": "02-29881055",
        "行動電話": "0933-852177"
    },
    "cars": [
        "BMW",
        "Nissan GT-R",
        "Audi"
    ]
}
console.log(person.firstname , person.city.通訊地址 , person.phone.行動電話)