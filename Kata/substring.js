function SubstringTest(str1, str2) {
    //looping thro
        for(let i=0;i<str1.length -1 ; i++){
            for(let j=0;j<str1.length -1 ; j++){
                //dubstring in a buil in method in javaScript
                if(str1.substring(i,i+2)===str2.substring(j,j+2)){
                    return true
                }
            }
    
        }
        return false
    }
    
    console.log(SubstringTest("Something", "Home"));
    