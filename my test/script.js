// var input = document.querySelector('.input');
// var area = document.querySelector('textarea');

// input.addEventListener('keydown', function (ev) {
//     var b;
//     //     area.value = `key: ${ev.key}
//     // keyCode: ${ev.keyCode}
//     // code: ${ev.code}
//     // which: ${ev.which}
//     // charCode: ${ev.charCode}`

//     //     var a = JSON.stringify(ev);
//     //     console.log(a)
//     for (key in ev) {
//         b += `${key}: ${ev[key]} 
// `
//     }
//     area.value = b;

// })

// const fillArray = count =>
//     (new Array(count)).fill('').map((item, i) => i + 1)

// const fooBar = array =>
//     array.map(number =>
//         !(number % 3) && !(number % 5)
//             ? "FooBar"
//             : !(number % 3) ? "Foo"
//                 : !(number % 5) ? "Bar" : number
//     )

// fooBar(fillArray(100))


// function foo(x) {
//     if (typeof x === "number" && !isNaN(x) && x != parseInt(x)) {
//         return true

//     }
//     else { return false }
// }



// const foo = x =>
//     (typeof x === "number" && !isNaN(x) && x != parseInt(x) ? true : false)

// console.log(foo(0.1))

// let arr = [1, 2, 3, 4, 5];
// delete arr[2]
// // arr = [];
// // console.log(arr)

// const obj = { key1: 1, key2: 2 }
// obj.hasOwnProperty('key1') //true

// console.log(arr.length)

// // Function Declaration
// function sum(a, b) {
//     return a + b;
// }

// // Function Expression
// var sum = function (a, b) {
//     return a + b;
// }

// function foo(str) {
//     let a = str.toLowerCase().split('').reverse().join('')
//     if (a === str.toLowerCase()) {
//         return true
//     }
//     console.log(a)
// }

// const foo = str =>
//     (str.toLowerCase() === str.toLowerCase().split('').reverse().join('') ? true : false)

// console.log(foo('112'))

// function foo() {
//     var a = 0;
//     return function {
//         return a++
//     }
// }

// const foo = () => {
//     let count = 0;
//     return () => count++
// }
// const b = foo();

// console.log(b()) //0
// console.log(b()) //1
// console.log(b()) //2

// Array.prototype.sum = function () {
//     return this.reduce((acc, value) => (acc + value))
// }

// console.log([1, 2, 3].sum())


// document.querySelector('button').addEventListener('click', function () {
//     oneDriveAPI.items.createFolder({
//         accessToken: accessToken,
//         rootItemId: "root",
//         name: "Folder name"
//     }).then((item) => {
//         console.log(item)
//         // returns body of https://dev.onedrive.com/items/create.htm#response
//     })
// })


var input = document.querySelector('.input');
var area = document.querySelector('textarea');

window.onload = function () {
    input.focus()
    input.click()
}

input.oninput = function (ev) {
    var b;
    for (key in ev) {
        b += `${key}: ${ev[key]}
`
    }
    area.value = b;
    input.nextElementSibling.focus()
    input.nextElementSibling.click()
};
// input.addEventListener('keypress', function (ev) {
//     var b;
//     //     area.value = `key: ${ev.key}
//     // keyCode: ${ev.keyCode}
//     // code: ${ev.code}
//     // which: ${ev.which}
//     // charCode: ${ev.charCode}`

//     //     var a = JSON.stringify(ev);
//     //     console.log(a)
// //     for (key in ev) {
// //         b += `${key}: ${ev[key]}
// // `
// //     }
// //     area.value = b;
// //     input.nextElementSibling.focus()
// //     input.nextElementSibling.click()
// })

// $('input').on('textInput', e => {
//     var keyCode = e.originalEvent.data.charCodeAt(0);
//     // keyCode is ASCII of character entered.
// })