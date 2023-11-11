// const array= [3,44]
// const sum =  array.reduce((accc, cur)=>{ return accc +cur},0)
// console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const sum = shoppingCart.reduce((item , acc)=> item +acc.price , 0)
console.log(sum);
