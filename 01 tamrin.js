// session 03
// const myArr = [0, 1, 2, 4]
// console.log(myArr)
// myArr.push(5, 6, 7)
// console.log(myArr)
// myArr.unshift(-2, -1)
// console.log(myArr)
// myArr.splice(2,0,'a','b')
// console.log(myArr)
//
// console.log(myArr.indexOf(3))
// console.log(myArr.indexOf(3) !== -1)
//
// const myArr = [1, 2, 3, 2, 5, 6, 7, 2]
// console.log(myArr.indexOf(2))
// console.log(myArr.lastIndexOf(2))
//
// const charArr = ['a', 'b', 'c', 'a','x','c','a']
// console.log(charArr.indexOf('a', 2))
//
// console.log(charArr.includes('a'))
//
// //
// const objArr = [
//     {id:1, name: 'mohammad'},
//     {id:2, name: 'mahdi'},
// ]
//
// console.log(objArr.indexOf({id:1, name: 'mohammad'}))
// console.log(objArr.includes({id:1, name: 'mohammad'}))
// const foundItem = objArr.find(function(element){
//     return element.name === 'mahdi';
// })
// console.log(foundItem)

// const foundItem = objArr.find(element => return element.name === 'mahdi')
// console.log(foundItem)

// const arr = [0, 1, 2, 3]
// const lastItem = arr.pop();
// console.log(arr)
// console.log(lastItem)
//
// const firstItem = arr.shift();
// console.log(arr)
// console.log(lastItem)

// let arr = [1, 2, 3, 4]
// arr = []
// arr.length = 0;
// arr.splice(0,arr.length)
// for (let item of arr){
//     arr.pop()
// }
// while (arr.length > 0){
//     arr.pop()
// }

function mod(a,b){
    let m = 0;
    let arr = [];
    while (m < b){
        if (b%m === a) arr.push(m);
        m++;
    }
    return arr;
}
console.log(mod(1,25))