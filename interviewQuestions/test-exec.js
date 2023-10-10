// what is the diffrence between the test() and exec()

// firt we check the exec()


const regex = /hello (\w+)/;
const str = 'hello world';
const result = regex.exec(str);

console.log(result);

//in here as the out put we get this 

// ['hello world', 'world', index: 0, input: 'hello world', groups: undefined]
// 0
// : 
// "hello world"
// 1
// : 
// "world"
// groups
// : 
// undefined
// index
// : 
// 0
// input
// : 
// "hello world"
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)

// In this example, the `exec()` method is used to match the regular expression `/hello (w+)/` against the string `’hello world’`. The resulting array contains the matched substring `”hello world”`, the captured group `”world”`, the index of the match, and the input string.
// 
// 




// and the second one test() so in this one the test() searches for the word if its in the string and tells us if its true or false 


const regex2 = /new/;
const str2 = 'this is somethig very new';
const result2 = regex2.test(str2);
console.log(result2);


// so the result is  true