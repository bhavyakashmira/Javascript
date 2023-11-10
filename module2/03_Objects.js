//singleton 
//Object.create{}

//object literals
const user = {
    name : 'bhavya',
    age  :'10',
    email:'bhavya@gmail.com',
    isloggedin : false
}

console.log(user)
console.log(user.age)


// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "bhavya",
  
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


// Object.freeze(JsUser)

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());