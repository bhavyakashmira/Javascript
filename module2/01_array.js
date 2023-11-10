//array

const array = [ 1,3,4,55,6]
//are resizable , can have different data types 

console.log(array[0])

//array methods 

array.push(6)
// we can push
array.push(8)
array.unshift(9)
console.log(array)

const newarr = array.join()

console.log(newarr)

//slice , splice

console.log("A ", newarr)
const myn1 = newarr.slice(1,3)
console.log("B ", myn1)
const myn2 = array.splice(1,3)
// splice works only on array
console.log("C ", myn2)
