function add(n1, n2) {
    return n1 + n2;
}

// Assign an anonymous function
// to a variable
const add = function(n1, n2) {
    return n1 + n2;
}

// Arrow function
const add = (n1, n2) => {
    return n1 + n2;
}

// Arrow function one-liner
const add = (n1, n2) => n1 + n2;

const sayHi = () => console.log('Hello');

sayHi();
let eight = add(3, 5);


$('button').on('click', () => {
    people.push('Edan');
});