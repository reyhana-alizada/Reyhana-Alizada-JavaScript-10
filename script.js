function manageFruits() {
    let fruits = ["Apple", "Banana", "Orange", "Grape", "Strawberry"];
    
    console.log("Initial array:", fruits);
    
    console.log("First element:", fruits[0]);

    console.log("Last element:", fruits[fruits.length - 1]);

    console.log("Number of elements:", fruits.length);

    fruits.push("Mango");
    console.log("After adding a new fruit:", fruits);

    fruits.pop();
    console.log("After removing the last fruit:", fruits);

    console.log("Final array:", fruits);
}


manageFruits();

// Part 2 - Reyhana Alizada

let numbers = [5, 12, 8, 20, 3, 15];

function printNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            console.log(numbers[i]);
        }
    }
}

printNumbers();