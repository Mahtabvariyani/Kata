
function neutralise (s1,s2){
    let res ="";
    for ( let i =0;i< s1.length;i++){
        if(s1[i] === "+" && s2[i]=== "+"){
            res += "+"
        }else if (s1[i] === "-" && s2[i] === "-"){ 
            res += '-'
    }else {
        res += "0"
    }

}
return res
}

console.log("3:if one of the inputs are not same return 0")
