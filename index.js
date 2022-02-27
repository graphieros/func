// Write an identity funciton that takes an argument and returns that argument
function identity(x) {
  return x;
}

// Write three binary functions, add, sub and mul, that take two numbers and return their sum, difference and product
function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}

// Write a funcion identityf that takes an argument and returns a function that returns that argument
function identityf(x) {
  return function () {
    return x;
  };
}

// Write a function addf that adds from two invocations
function addf(x) {
  return function (y) {
    return x + y;
  };
}

// Write a function lift that takes a binary function that makes it callable with two invocations
function liftf(binary) {
  return function (first) {
    return function (second) {
      return binary(first, second);
    };
  };
}

// Write a function curry that takes a binary function and an argument, and returns a function that can take a second argument
function curry(func, ...first) {
  return function (...second) {
    return func(...first, ...second);
  };
}

// Without writing any new functions, show three ways to create the inc function

const inc1 = addf(1);
const inc2 = liftf(add)(1);
const inc3 = curry(add, 1);

// Write a function twice that takes a binary function and returns a unary function that passes its argument to to the binary function twice
function twice(binary) {
  return function (a) {
    return binary(a, a);
  };
}

const doubl = twice(add);
const square = twice(mul);

// Write reverse, a function that reverses the arguments of a binary function
function reverse(func) {
  return function (...args) {
    return func(...args.reverse());
  };
}

// Write a function composeu that takes two unary functions and returns a unary function that calls them both

function composeu(f, g) {
  return function (a) {
    return g(f(a));
  };
}

// Write a function composeb that takes two binary functions and returns a function that calls them both

function composeb(f, g) {
  return function (a, b, c) {
    return g(f(a, b), c);
  };
}

// Write a limit function, that allows a binary function to be called a limited number of times
function limit(binary, count) {
  return function (a, b) {
    if (count >= 1) {
      count -= 1;
      return binary(a, b);
    }
    return undefined;
  };
}

const add_ltd = limit(add, 1);
// console.log(add_ltd(3, 4));
// console.log(add_ltd(3, 5));

// Write a from function that produces a generator that will produce a series of values
function from(start) {
  return function () {
    let next = start;
    start += 1;
    return next;
  };
}

// const index = from(0);

// Write a to function that takes a generator and an end value, and returns a generator that will produce numbers up to that limit
function to(gen, end) {
  return function () {
    const value = gen();
    if (value < end) {
      return value;
    }
    return undefined;
  };
}

// const index = to(from(1), 3);
// console.log(index());
// console.log(index());
// console.log(index());

// Write a fromTo function that produces a generator that will produce values in a range
function fromTo(start, end) {
  return to(from(start), end);
}

// const index = fromTo(0, 3);
// console.log(index());
// console.log(index());
// console.log(index());
// console.log(index());

// Write an element function that takes an array and a generator and returns a generator that will produce elements from the array
function element(array, gen) {
  return function () {
    const index = gen();
    if (index !== undefined) {
      return array[index];
    }
  };
}

// const ele = element(["a", "b", "c", "d"], fromTo(1, 3));
// console.log(ele());
// console.log(ele());
// console.log(ele());
