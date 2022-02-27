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
