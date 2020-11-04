/**
 * Helper Functions and Refactoring:
 *
 * Follow the instructions below to create helper functions and refactor the following code.
 * 1.  Write a function that returns a car object.  The function's parameters should be
 * the name, number of doors, the make, and the model.
 *
 * 2.  Refactor your code by using your function to creat car1, car2, and car3.
 *
 * 3.  Write a helper function that prints the car.  This function doesn't have to return anything, and the parameters should be only a car object.
 *
 * 4.  Refactor the code below to use your helper function to print out the cars.
 *
 * 5.  Look at how nice your code is (no more duplicate code!) and pat yourself
 */
const car1 = {
  name: "Car 1",
  doors: 2,
  make: "Ford",
  model: "mustang"
};

console.log("Name: " + car1.name);
console.log("make: " + car1.make);
console.log("model: " + car1.model);

const car2 = {
  name: "Car 2",
  doors: 4,
  make: "Toyota",
  model: "camry"
};

console.log(car2.name);
console.log("make: " + car2.make);
console.log("model: " + car2.model);

const car3 = {
  name: "Car 3",
  doors: 2,
  make: "Chevrolet",
  model: "corvette"
};

console.log(car3.name);
console.log("make: " + car3.make);
console.log("model: " + car3.model);
