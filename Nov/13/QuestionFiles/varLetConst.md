what is the diffrences between Let Var Const in JavaScript ??
let is blocked scoped and var is Fucntion scoped 

function sum(){
    

    if(true){
      var sam=10
    }
    console.log(var)
    //outPut is 10 
}

but if we change the var to let its gonna be undefined bcz the let is blocked scoped and var if cuntion scoped


and the const can be only once asigned able and not many time and can not be reasigned 
