
const playlistQuotes = document.getElementById("playlist-quotes");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

// Array of Quote objects
const allQuotes = [
/*{
    id: ?,
    title: I prefer not to speak,
    duration: 0:30,
    src:    ,

    Continue with the rest of the objects
}
*/
];

// Working with Web Audio API: Code below creates new HTML5 Audio element
const audio = new Audio();


//Creating an empty object to keep track of the quotes, 
// the current quote playing, and the time of the current quote.
// let userData = {};

/* NB: New concept: Spread Operator (...)

The spread operator (...) allows you to copy all elements from one array into another. 
It can also be used to concatenate multiple arrays into one. 
In the example below, both arr1 and arr2 have been spread into combinedArr:

Example Code
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
*/

// NB: Use of spread operator in our quote app

let userData = {
    quotes: [... allQuotes],
    currentQuote: null,
    quoteCurrentTime: 0,
};

/* NB: New concept - arrow functions () => {}
 An arrow function is an anonymous function expression and a shorter way to write functions. 
 Anonymous means that the function does not have a name. 
 Arrow functions are always anonymous.

Here is the basic syntax:

Example Code
() => {}
By assigning the arrow function definition to a variable, you bind it to an identifier.

Example Code
const exampleFunction = () => {
  // code goes here
}
*/