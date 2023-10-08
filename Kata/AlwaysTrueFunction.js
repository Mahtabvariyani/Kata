
function alwaysTrue(strings){
    newstrings=[];
    alwaysTrueFuntion = true;

    for ( let i =0; i < strings.length;i++){
        if(strings[i] === "flick"){
            alwaysTrueFuntion = !alwaysTrueFuntion
        }else{
            alwaysTrueFuntion = alwaysTrueFuntion
        }
        newstrings.push(alwaysTrueFuntion)
    }

    return newstrings


}

console.log("2:the function is always true : what if it reaches to work flick it gonna be false")
