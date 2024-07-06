interface Person{
    name: string;
    age: number;
}

const people: Person[] = [
    {name: "John Lee", age: 30},
    {name: "Marry Burner", age: 25},
    {name: "Harry Kill", age: 35}
]

// function to filter people who are at least 30 years old
function filterAdult(persons: Person[]): Person[]{

    return persons.filter(person => person.age >= 30);

}

// show result
const adults = filterAdult(people);
console.log(adults);