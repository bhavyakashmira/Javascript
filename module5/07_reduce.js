const array= [3,4,52,5,3,6,36,3,7,8,5,7,4]

// const newnum = array.map((item)=> item+10)
const newnum = array.map((num) => num*10).map((num) => num+1)
 .filter((num)=>  num>100)
console.log(newnum);