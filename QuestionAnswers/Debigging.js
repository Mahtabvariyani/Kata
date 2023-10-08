
//I want this code to log out "hey amy", but it logs out "hey arnold" - why?

function greet(person) {
    if (person == { name: 'amy' }) {
      return 'hey amy'
    } else {
      return 'hey arnold'
    }
  }
  console.log(greet({ name: 'amy' }))

  //it is bcz that the person and {name:'amy} has been compared together which they are not at this moment so the else part is executing to avoid thid Problem and print the 'amy' we have to declare a variable and compare it with person like this 

  function greet2(person2){
    let thisPerson = person2;
    if (person2 == thisPerson) {
        return 'hey amy'
    } else {
        return 'hey arnold'
    }

  }
  console.log(greet2({name: 'amy' }))


  //2. I want this code to log out the numbers 0, 1, 2, 3 in that order, but it doesn’t to fix it you have to just change the var to let 

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}

//3. I want this code to log out "doggo", but it logs out undefined!

let dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name)
  }
}
let sayName = dog.sayName
sayName()

//4. I want my dog to bark(), but instead I get an error. Why?
function Dog(name) {
  this.name = name
}
Dog.bark = function() {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()
