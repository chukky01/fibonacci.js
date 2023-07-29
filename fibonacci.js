//create a function called fibonacci
const fibonacci = (n) => {
  if (n === 0) { //takes the first value which is zero
    return 0;
  } else if (n === 1) { //takes the second value which is one
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); //if number entered isn't zero or one, do the given formula with the given number
  }
};

//create a function called main
const main = () => {
  const n = Number(prompt("Enter a number: "));//ask the user for input and calls the fibonacci function with the number that the user entered.
  for (let i = 1; i <= n; i++) {
    console.log(fibonacci(i));
  }
};

main(); //calls the main program
