# Part 2: Essay Questions

## Question 1: What is the difference between forEach and for...of?

### Answer:

Both `forEach` and `for...of` are used to loop through elements.

`forEach` is an array method that takes a callback function and runs it for every element. I use it when I want to do something with all elements and don't need to stop the loop.

`for...of` is a loop that goes through elements one by one. I use it when I need to stop the loop using `break` or skip an element using `continue`.

The main difference is that `forEach` doesn't support `break` and `continue` like `for...of` does.

## Question 2: What is Hoisting and Temporal Dead Zone (TDZ)? Explain with examples.

### Answer:

**Hoisting:**

Hoisting means JavaScript processes variable and function declarations before executing the code.

When we use `var`, the variable is initialized with `undefined` before the code starts executing, so we can access it before its declaration.

```javascript
console.log(x); // undefined
var x = 10;
```

Function declarations are also hoisted, so we can call them before writing their declaration in the code.

```javascript
sayHello(); // Hello

function sayHello() {
  console.log("Hello");
}
```

But function expressions and arrow functions assigned to `let` or `const` cannot be called before their initialization because of TDZ.

**Temporal Dead Zone (TDZ):**

TDZ is the period between entering a scope and initializing a variable declared with `let` or `const`.

If we try to access the variable during this period, JavaScript gives us a `ReferenceError`.

```javascript
console.log(y); // ReferenceError
let y = 20;
```

So the difference is that `var` gives `undefined` before its declaration, while `let` and `const` cannot be accessed during the TDZ.

## Question 3: What are the main differences between == and ===?

### Answer:

`==` compares two values and can convert their types automatically if they are different.

`===` compares values without converting their types, so both the value and the type must match.

**Example:**

```javascript
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

In the first example, JavaScript converts `"5"` from string to number, so the result is `true`.

But in the second example, one value is a number and the other is a string, so the result is `false`.

I usually prefer `===` because it avoids automatic type conversion.

## Question 4: Explain how try-catch works and why it is important in async operations.

### Answer:

`try-catch` is used to handle errors in JavaScript.

The `try` block contains the code we want to execute. If an error happens, the `catch` block handles it so we can deal with the error.

It is important in async operations because when we use `async/await`, a Promise might reject, and `try-catch` helps us handle that error.

**Example:**

```javascript
async function getData() {
  try {
    const result = await Promise.reject("Failed");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData(); // Failed
```

In this example, the Promise rejects, so JavaScript moves to the `catch` block and prints `"Failed"`.

## Question 5: What's the difference between type conversion and coercion? Provide examples of each.

### Answer:

Both type conversion and type coercion are used to change a value from one data type to another.

**Type Conversion:**

Type conversion is when we manually change the data type using functions like `Number()` or `String()`.

Example:

```javascript
let x = "123";
let y = Number(x);

console.log(y); // 123
```

Here I converted the string to a number by myself.

**Type Coercion:**

Type coercion happens when JavaScript automatically converts a value to another data type during an operation.

Example:

```javascript
console.log("10" - 5); // 5
```

Here JavaScript automatically converts `"10"` from string to number because of the subtraction operator.

**The main difference is that type conversion is done manually by the programmer, while type coercion happens automatically by JavaScript.**
