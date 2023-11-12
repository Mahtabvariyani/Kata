//1_ Explain high order functions in javaScript and write an example for it 

High Order functions in JavaScript is a fancy name for the functions in javaScript that take another function  as a parameter .... as we all know in javaScript Functions are objects so its no surprise  when a function take another function as a parameter  for example 


.map and .filter are one of those popular examples of the high order functions 
 here is the example of .map()

 const array = [2,4,6,7,]
 const map = array.map(function(x) => {
    return x * 2
 })

 console.log(map)

//2- what are the arrow functions and name few diffrences 

So Arrow functions were introduced  in ES6 and  it is actuality   the shorter way and concise  way to write functions  but there are several key diffrences 
 A_you can get ride of the function key word  
 B_ if the function returns ony one line of code we can remove the return key word and curly bracelets  becouse it automatically  returns 
 c_ IF it has only one arguments  we can also remove the parantecies 
D- one more key difference  is that you can not  use arrow functions as constructor functions 



//3_ what is Event loop in JavaScript ??


//4_in event loop we have MicroTask and MacroTask so what are the diffrences between these 2 ?

//5_list the diffrences between map-filter-reduce Method ??
 

 //6_ diffrences betweeen async and Promices ?? and in which situation you should perfer which one ??

 //7_ if your UI PErformance of the application is slow then what are you gonna do to make a faster and better exprience for the user??


 //8_ if you stuck somewhere what are the debugging  Technices are you gonna use?? 


 