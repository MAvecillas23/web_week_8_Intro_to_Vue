// ways of declaring variables and constants in js

// let creates a variable- it can be changed

let school = 'Minneapolis College'
school = 'Saint Paul College'
school = 'Metro State'
school = 'Minneapolis College'

// creating constants
// not allowed to change constant variables
const language = 'JavaScript'
console.log(language)
//language = 'C#'

// using const in arrays
const states = ['Minnesota', 'Wisconsin', 'Iowa']
//states = ['California', 'Oregon']  //error - replacing the data is not allowed
states.push('Michigan') // allowed to modify the array
console.log(states)

// working with objects
// const address = {
//     number: '1501',
//     street: 'Hennepin Avenue',
//     city: 'Minneapolis'
// }

// cant reassign const objects
// address = 2232
// address = {}

// not allowed to modify const objects but you can add to them
// address.zip = '55403'
// console.log(address)


// creating objects from data in variables
const number = '1501'
const street = 'Hennepin Avenue'
const city = 'Minneapolis'
//
// const address = {
//     number: number,
//     street: street,
//     city: city
// }
//
// console.log(address)

// shortcut for creating an object

let address = {
    number,    // assumes property name is number
    street,
    city
}

console.log(address)
