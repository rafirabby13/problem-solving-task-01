const people = [
    {
        name: "Rafi Ahmed",
        age: 24,
        gender: "Male"
    },
    {
        name: "Sara Khan",
        age: 22,
        gender: "Female"
    },
    {
        name: "John Doe",
        age: 30,
        gender: "Male"
    }
];

const getFemaleNames = (people) => {
    return people
        .filter(person => person.gender === "Female")
        .map(person => person.name);
}

const names = getFemaleNames(people);

// console.log(names); 

const books = [
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        year: 2008
    },
    {
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        year: 2015
    },
    {
        title: "Design Patterns",
        author: "Erich Gamma",
        year: 1994
    }
];

const booksWithOnlyTitles = (books) => {
    return books.map(book =>  book.title );


}

console.log(booksWithOnlyTitles(books))

// const composeFunction = (number) => {
//     const square = (number) => number * number;
//     const squareValue = square(number);
//     const double = (number) => number + number;
//     const doubleValue = double(squareValue);
//     const increament = (number) => number + 5;
//     const incrementValue = increament(doubleValue);

//     return incrementValue;

// }

// console.log(composeFunction(5))

const square = (number) => number * number;
const double = (number) => number + number;
const increment = (number) => number + 5;

const composedFunction = (...funcs) => {
    return (initialValue) => {
        return funcs.reduceRight((accumulator, currentFunc) => {
            return currentFunc(accumulator);
        }, initialValue);
    };
}  

const result = composedFunction(increment, double, square)(5);

// console.log(result);
const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "BMW", model: "X5", year: 2018 }
];


const carsSortingByYear = (cars) => {
    return [...cars].sort((a, b) => a.year - b.year);
}


console.log(carsSortingByYear(cars))

const persons = [
  { name: "Alice", age: 25, gender: "Female" },
  { name: "Bob", age: 30, gender: "Male" },
  { name: "Charlie", age: 22, gender: "Male" },
  { name: "Diana", age: 28, gender: "Female" },
  { name: "Ethan", age: 35, gender: "Male" }
];


const modifyAge = (name, increament)=>{
    const updatedPeople = persons.map(p => {
        if (p.name === name) {
            return { ...p, age: p.age + increament };
        }        
        return p;
    }); 
    return updatedPeople;
}

console.log(modifyAge("Ethan", 2223))

const numbers = [1, 2, 3, 4, 5, 6];

const sumOfEvens =(numbers)=>{
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    const sum = evenNumbers.reduce((acc,curr)=>acc + curr, 0);
    return sum
}

// console.log(sumOfEvens(numbers))

const leapYear = (year)=>{
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap Year";    
    } else {
        return "Not a Leap Year";
    }   
}
console.log(leapYear(2000))
const numbers2 = [1, 2, 3, 4, 2, 5, 3, 6, 1, 7,8,8,8,8];

const removeDuplicates = (numbers)=>{
    return [...new Set(numbers)];
}

// console.log(removeDuplicates(numbers2))


const students = [
  { name: "Alice", grades: [85, 90, 78] },
  { name: "Bob", grades: [92, 88, 95] },
  { name: "Charlie", grades: [70, 75, 80] },
  { name: "Diana", grades: [88, 82, 91] },
];

const studentsWithAverageGrades = (students)=>{
    return students.map(student => {
        const total = student.grades.reduce((acc, curr) => acc + curr, 0);
        const average = total / student.grades.length;
        return { name: student.name, averageGrade: average };
    }).sort((a, b) => b.averageGrade - a.averageGrade);
}

// console.log(studentsWithAverageGrades(students))

const products = [
  {
    name: "Laptop",
    category: "Electronics",
    quantity: 2,
    price: 1200,
    inStock: true,
    discount: 10, // percentage
  },
  {
    name: "Smartphone",
    category: "Electronics",
    quantity: 5,
    price: 800,
    inStock: true,
    discount: 5,
  },
  {
    name: "Chair",
    category: "Furniture",
    quantity: 10,
    price: 50,
    inStock: false,
    discount: 0,
  },
  {
    name: "Notebook",
    category: "Stationery",
    quantity: 20,
    price: 2,
    inStock: true,
    discount: 0,
  },
];

const totalInventoryValue = (products)=>{
    return products.reduce((total, product)=> total + product.price * product.quantity, 0)
}

// console.log(totalInventoryValue(products))