const person = ['rakib', 'nokib', 'anis', 'akib', 'dakib']
const sortedPerson = person.sort()
console.log(sortedPerson)

const numbers = [4, 8, 6, 49, 34, 56, 78, 90, 87, 65, 43, 21]
const numbers_asc = [...numbers].sort(function(a, b){return a - b});
const numbers_dsc = [...numbers].sort(function(a, b){return b - a});
console.log(numbers_asc)
console.log(numbers_dsc)