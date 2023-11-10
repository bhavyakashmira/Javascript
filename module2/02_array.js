const marvel = ["thor" , "ironman","spiderman"]
const dc_hero = ["superman" , "batman" , "flash"]
// marvel.push(dc_hero)
// const allhero = marvel.concat(dc_hero)
// console.log(allhero)

// const all_new = [...marvel,... dc_hero]
// console.log(all_new)

const another = [1,2,4,5,[2,5,2,525,4],7,[6,7,[4,5]]]

const heroic = another.flat(Infinity)
console.log(heroic)


console.log(Array.isArray("bhavya"))
console.log(Array.from("bhavya"))
console.log(Array.from({name: "bhavya"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


