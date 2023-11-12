//this kata (Leaping year)


//what is the leap year?? سال کبیسه

function isLeapYear(year) {
    // TODO
    const number = year % 100 === 0  ? year % 400 === 0 : year  % 100 === 0
    if(number ){
      return true
    }else { 
    return false
    }
  }

  //this was the first solution which is not 100% right it fails in last input 

  //but this solution works

  function isLeapYear(y) {
    if (y % 400 == 0) return true
    if (y % 100 == 0) return false
    if (y % 4 == 0) return true
    return false
  }