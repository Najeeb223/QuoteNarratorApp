
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

 Arrow function with parameter e.g:
 Just like regular functions, arrow functions can accept multiple parameters.

Here is an example of a named arrow function with one parameter:

Example Code
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
If the function only has one parameter, you can omit the parentheses around the parameter list like this:

Example Code
const greet = name => {
  console.log(`Hello, ${name}!`);
};
If the arrow function is returning a simple expression, you can omit the return keyword and the curly braces {}. This is called an implicit return.

Example Code
const multiplyTwoNumbers = (num1, num2) => num1 * num2;
If your arrow function has multiple lines of code in the function body, then you need to use the return keyword and the curly braces {}.

Example Code
const getTax = (price) => {
  const taxRate = 0.08;
  const tax = price * taxRate;
  return tax;
};

The map() method is used to iterate through an array and return a new array. It's helpful when you want to create a new array based on the values of an existing array. For example:

Example Code
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2); // doubledNumbers will be [2, 4, 6]
Notice that the map() method takes a function as an argument. 
This is called a callback function, which is a function that is passed to another function as an argument. 
In the example above, the callback function is (number) => number * 2, and it's run on each element in the numbers array. 
The map() method then returns a new array with the results.
*/

/*
  join() method notes with e.g:
  The join() method is used to concatenate all the elements of an array into a single string. 
  It takes an optional parameter called a separator which is used to separate each element of the array. For example:

  Example Code
  const exampleArr = ["This", "is", "a", "sentence"];
  const sentence = exampleArr.join(" "); // Separator takes a space character
  console.log(sentence); // Output: "This is a sentence"

*/
const renderQuotes = array => {

  const quotesHTML = array.map((quote)=> {

    return `
      <li id="quote-${quote.id}" class="playlist-quote">
      <button class="playlist-quote-info"><span class="playlist-quote-title">${quote.title}</span></button>
      <span class="playlist-quote-artist">${quote.coach}</span>
      <span class="playlist-quote-duration">${quote.duration}</span>
      <button class="playlist-quote-delete" aria-label="Delete ${song.title}"></button>
      </li>
      `;
  }).join("");
    playlistQuotes.innerHTML = quotesHTML; 
};
