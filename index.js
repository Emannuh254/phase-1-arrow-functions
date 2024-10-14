function foo() {
    return 'bar';
  }
  const foo = function() {
    return 'bar';
  };
  const add = (a, b) => a + b;
  add(2, 3); //=> 5
  const multiply = (x, y) => x * y;
  const double = x => x * 2;
  const subtract = (a, b) => {
    console.log(a, b);
    return a - b;
  };
  const nums = [1, 2, 3];
  const squares = nums.map(x => x ** 2); 
  // squares => [1, 4, 9]
          