// ///////////////////////////// Problem 1: Using factory /////////////////////////////////////////
function createFood(name,type,price,deliverTime,isPrimeUser){
    return{
        name,
        type,
        price,
        deliverTime,
        isReady : false,
        rate : 0,
        comment : [],
    }
}
function createComment(author,text){
    return{
        author,
        text,
        rate : 0,
        date : new Date(),
    }
}
function order(Food,prime){
    if (prime) console.log("Price is %s and rate is %s", 0.8 * Food.price, Food.rate)
    else console.log("Price is %s and rate is %s", 0.8 * Food.price, Food.rate)
}
function addComment(Food,author,text){
    const foodComment = createComment(author,text);
    Food.comment.push(foodComment);
}
function setRate(Food,rate){
    Food.rate = rate;
}

const Food1 = createFood("pizza","Italian",80000,30,0);
addComment(Food1,'ali','perfect')
setRate(Food1,4)

console.log(Food1)
console.log(order(Food1,true))



// ///////////////////////////// Problem 1: Using constructor /////////////////////////////////////////
function Food(name,type,price,deliverTime,isPrimeUser){
    this.name = name;
    this.type = type;
    this.price = price;
    this.deliverTime = deliverTime;
    this.isReady = false;
    this.rate = 0;
    this.comment = [];
}
function Comment(author,text){
    this.author = author;
    this.text = text;
    this.rate = 0;
    this.date = new Date();
}

function order(Food,prime){
    if (prime) console.log("Price is %s and rate is %s", 0.8 * Food.price, Food.rate)
    else console.log("Price is %s and rate is %s", 0.8 * Food.price, Food.rate)
}
function addComment(Food,author,text){
    const foodComment = new Comment(author,text);
    Food.comment.push(foodComment);
}
function setRate(Food,rate){
    Food.rate = rate;
}

const Food1 = new Food("pizza","Italian",80000,30,0);
addComment(Food1,'ali','perfect')
setRate(Food1,4)

console.log(Food1)
console.log(order(Food1,true))




// ///////////////////////////// Problem 2-a: Check if two objects are equal /////////////////////////////////////////



function isEqual(obj1,obj2){
    if (Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    else{
        for (let key in obj1){
            if (!(key in obj2)) return false;
            else if (typeof obj1[key] === 'object'){
                isEqual(obj1[key], obj2[key])
            }
        }
        return true;
    }
}

const obj1 = {
    key0 : false,
    key1 : 'val1',
    key2 : 20,
    key3 : [0, 1, 2],
    key4 : {name: 'sahar'},
}
const obj2 = {
    key0 : false,
    key1 : 'val1',
    key2 : 20,
    key3 : [0, 1, 2],
    key4 : {name: 'sahar'},
}
console.log(isEqual(obj1, obj2))

const obj3 = {
    key0 : false,
    key1: 'val1',
    key2 : 10,
    key3 : [0],
}
const obj4 = {
    key0 : false,
    key1: 'val1',
    key2 : 20,
    key3 : [1],
    key4 : {},
}
console.log(isEqual(obj3,obj4))


// ///////////////////////////// Problem 2-b: Check if two objects are the same /////////////////////////////////////////

function isSame(obj1,obj2){
    if (Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    else{
        if (obj1 === obj2) return true;
        else return false;
    }
}

const obj5 = {
    key0 : false,
    key1: 'val1',
    key2 : 10,
}
const obj6 = {
    key0 : false,
    key1: 'val1',
    key2 : 10,
}
const obj7 = obj5;

console.log(isSame(obj5,obj6))
console.log(isSame(obj5,obj7))
