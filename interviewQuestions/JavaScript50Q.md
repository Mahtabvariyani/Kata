#1- what is JavaScript?
              JavaScript is a lightweight interpreted(Without compiler) progeramming language which is
                             used for making interactive websites with more UserInteractions.
              
#2-what is the diffrence between java and JavaScript Language?
             \*java{
             eeds compiler
             uns in virtual machine or browser
             OP progerammming language
             }
             \*\*JavaScript{
             the codes are all in the form text and doesnt need compiler
             OOP scripting language
             the code runs in the broweser only
             }
             
#3-what are the data types in javaScript ?
      **Number- Boolean-String-Null-Symbols-Object-undefined
    

#4-what are the features of the JavaScript?

              **Lightweighted/interpreted language
              **network centering --- is very welll suited for building apps that primarly operate over               computer network
              **can be integrated with Java when its needed
              **cross-Platform// can be written a code and be used in Diffrent browers and platforms
              (In summary, JavaScript's design philosophy includes features and capabilities that make it               a powerful tool for building web-based applications that rely on network communication.)
              

#5-is JavaScript a CaseSensetive?
               yes it is for sure the Text and text are 2 diffrent variables
               

#6-what are the Advantages of JavaScript?
              **Increasing interactivity with user 
              **richer Interfaces
              **less Server InterActions
              **Imidiate feedback to visitiors
             

$6-how to make an Object in JAvaScript?

             let Person = {
                 name:"Mahtab",
                 lastName:"Variyani",
                 age:30
             }
             
$7-how to create an  Array?

          let arr =[1,2,3]
          ||
          let arr = []
          
$8-what is a name Function in JavaScript an dhow you define it ?

           function sum(){
               console.log("name)
           }
           you write a function and the you name the function
           

$9-Can you assign an anonymous function to a variable and pass it as an argument to another function?
               const myFunction = function(x,y){
                  return x+y
               }
               function performOperation(operation,a,b){
                  return operation(a,b)
               }
              
               const result =performOperation(myFunction,7,4);
               console.log(result)
               

$10-What is argument objects in JavaScript & how to get the type of arguments passed to a function?

                  JavaScript variable arguments are the arguments are passed to a                  function ... and by using typeof we can get the typeof them 
                 
                 
                  function func(sum){
                     console.log(typeof sum,arguments.length)
                  }
                  func()//undefined
                  func(9)//number 1
                  

$11-what are the scopes of a variable in JavaScript?

           in javaScrip the valiabes have 2 type of scopes 
           which{
            1- global // is avalible in whole script window 
            2-local scopes    // its avalible in its own script window
           }
           
$12-What is the purpose of "This Operator" in JavaScript?
           when its inside object scope it refers to the object 
           and when its outside object scope it refers to global scopes
           
$13-What is CallBack function in JavaScript?
          is a plain javaScript function which will be executed after the another           function being executed 
          
$14-what is closure function in JavaScript?
          nested function in JavaScript are called closures
          function one(x){
           function two(y){
               return x+y
           }
           return two
          }
          
          let closurefunction = one(10)
          console.log(closurefunction(2))
          

$15-Name some of the built-in Fucntions



$16-Variable naming convention in JavaScript?

             **should not be used the reserved words in JavaScript
             ** should not start with anumber 
             **and CamleCase bcouse its Case Sensetice so text and Text are 2 diffrent variables


$17-How does Type Of Operator work?

its is used to get the type of operand 

$18-how create cookie using javaScript?

            function setCookie(name,value,daysToExpire){
                const date= new Date();
                data.setTiem(date.getTime()+ daysToExpire * 24 * 60 * 60 * 1000);
                const expires= "expires=" + date.toUTCString();
                document.cookie = name + "=" + value + expires + "; path=/";
            }
            setCookie("username " , "John" ,7) 


            or document.cookie = "key1 = value1; key2 = value2; expires = date";

$19-Q20. How to read a cookie using JavaScript?
           

       document.cookie = "session=123456789";

      function readAllCookies() {
         let cookies = document.cookie;
         console.log(cookies);
      }

      readAllCookies();


$20-Explain call(), apply() and, bind() methods.

     first is call() method which is working normall as calling a function 
            function greet(name) {
              console.log(`Hello, ${name}! I am ${this.job}.`);
            }
            
            const person = {
              name: "John",
              job: "developer",
            };
            
            greet.call(person, person.name);
            // Output: Hello, John! I am developer.
            

applay method () is similar to call method it invokes the function imidiatly but it takes agruments as an array like here 
                  function sum(a, b) {
                 return a + b;
               }
               
               const numbers = [5, 7];
               const result = sum.apply(null, numbers);
               console.log(result); // Output: 12
               

in the bind method   it makes a new whole function and it call be called like this      function greet() {
                 console.log(`Hello, ${this.name}! I am ${this.job}.`);
               }
               
               const person = {
                 name: "Alice",
                 job: "designer",
               };
               
               const greetPerson = greet.bind(person);
               greetPerson();
               // Output: Hello, Alice! I am designer.
               
$21-Explain Hoisting in javascript.

(check other files)