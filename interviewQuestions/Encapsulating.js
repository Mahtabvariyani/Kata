// Define a car object using an IIFE (Immediately Invoked Function Expression)
const Car = (function () {
    // Private variables
    let speed = 0;
  
    // Public methods
    return {
      start: function () {
        console.log("Car started");
      },
      accelerate: function () {
        speed += 10;
        console.log(`Accelerating to ${speed} mph`);
      },
      brake: function () {
        if (speed > 0) {
          speed -= 5;
          console.log(`Braking to ${speed} mph`);
        } else {
          console.log("Car is already stopped");
        }
      },
    };
  })();
  
  // Use the car object
  Car.start();          // Output: "Car started"
  Car.accelerate();     // Output: "Accelerating to 10 mph"
  Car.brake();          // Output: "Braking to 5 mph"
  Car.brake();          // Output: "Braking to 0 mph"
  Car.brake();          // Output: "Car is already stopped"
  


//   Encapsulation in programming is like putting your data and the methods that operate on that data into a single unit or container. Think of it as a protective capsule that hides the details of how something works.





// We define a Car object using an Immediately Invoked Function Expression (IIFE) to create a private scope.
// Inside the IIFE, we have a private variable speed, which cannot be accessed directly from outside the IIFE.
// We provide public methods (start, accelerate, and brake) that allow controlled interaction with the car's behavior and data.
// Users of the Car object can start the car, accelerate, and brake, but they cannot directly modify the speed variable. This encapsulates the car's internal state and behavior.