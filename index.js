// JavaScript Array Methods Part I
// https://real-kevbot.medium.com/array-methods-part-i-cd08c552356a

// concat()
// Joins two or more arrays, and returns a copy of the joined arrays

let currentStudents = ['Tobias', 'Dwight', 'Andy', 'Emily', 'Kathy']
let newStudents = ['Jerry', 'Sandy', 'Patrick', 'Robert']
let studyAbroad = ['Charles', 'Piotr']

let allStudents = currentStudents.concat(newStudents, studyAbroad)

console.log(allStudents)


// find()
// Returns the value of the first element in an array that pass a test

let garage = [
    '1967 Ford Mustang Fastback', 
    '1970 Chevrolet Chevelle SS', 
    '1937 Cord 812', 
    '1987 Ferrari F40', 
    '1968 Shelby GT350'
]

function sundayDriver(car) {
    return car === '1968 Shelby GT350'
}

function trackDaySpecial(car) {
    return car === '1987 Ferrari F40'
}

console.log('My Sunday Driver:', garage.find(sundayDriver))

console.log('My Track Day Special:', garage.find(trackDaySpecial))


// includes()
// Check if an array contains the specified element, returns true or false 

let fruitList = [
    'Apples', 
    'Oranges', 
    'Mangos', 
    'Bananas', 
    'Passion Fruit', 
    'Guava', 
    'Dragon Fruit'
]

console.log('My fruit list includes Guava? ', fruitList.includes('Guava'))
console.log('My fruit list includes Grapes? ', fruitList.includes('Grapes'))


// // pop()
// //Removes the last element of an array, and returns that element

let racers = [
    'Manuel Lettenbichler', 
    'Alfredo Gomez', 
    'Johnny Walker', 
    'Taddy Blazusiak', 
    'Graham Jarvis'
]

let knockout1 = racers.pop()
console.log('First Knock Out ' + knockout1)
console.log(racers)

let knockout2 = racers.pop()
console.log('Second Knock Out ' + knockout2)
console.log(racers)


// push()
// Adds new elements to the end of an array, and returns the new length

let shoppingList = ['Iced Tea', 'Chicken Cutlets', 'Milk', 'Paper Towels', 'Chips']
console.log('Original Shopping List: ', shoppingList)

let newList = shoppingList.push('Windex', 'Carrots', 'Onions')
console.log('Updated Shopping List: ', shoppingList)
console.log('Push returns the new length of the array: ', newList)


// shift()
//Removes the first element of an array, and returns that element

let topSellingVehicles = [
    'Ford F-Series', 
    'Chevrolet Silverado', 
    'Dodge RAM Pickup', 
    'Toyota RAV4', 
    'Honda CR-V'
]

let numOneSeller = topSellingVehicles.shift()
console.log('Number one best seller is the ' + numOneSeller)
console.log(topSellingVehicles)

let numTwoSeller = topSellingVehicles.shift()
console.log('Number two best seller is the ' + numTwoSeller)
console.log(topSellingVehicles) 

let numThreeSeller = topSellingVehicles.shift()
console.log('Number three best seller is the ' + numThreeSeller)
console.log(topSellingVehicles) 


// slice()
// Selects a part of an array, and returns the new array

let riders = ['Mike', 'Kyle', 'Kathy', 'Kevin', 'Molly', 'Xavier', 'Skip', 'William']

let expert = riders.slice(6)
console.log('Expert Riders: ', expert)

let intermediate = riders.slice(0,6)
console.log('Intermediate Riders: ', intermediate)


// splice()
// Adds/Removes elements from an array

let alphabet = ['A', 'B', 'C', 'D', 'E', 'I', 'J', 'K']
console.log(alphabet)

alphabet.splice(5, 0, 'F', 'G', "H")
console.log(alphabet)