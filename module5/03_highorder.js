// const array= [3,4,52,5,3,6,36,3,7,8,5,7,4]

// for (const it of array){
//     console.log(it);
// }
const greet = "happynewyear"
for (const it of greet) {
    console.log(`each char is ${it}`);
}


//maps
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const [it, v] of map) {
    console.log(it , v);
}
