var people = [
    { name: "John Lee", age: 30 },
    { name: "Marry Burner", age: 25 },
    { name: "Harry Kill", age: 35 }
];
// function to filter people who are at least 30 years old
function filterAdult(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
// show result
var adults = filterAdult(people);
console.log(adults);
