
function arrayPlusArray(arr1,arr2){
  let sum =0
  for(let i=0;i<arr1.length;i++){
    sum += arr1[i]
  }
  for(let i=0;i<arr2.length;i++){
    sum += arr2[i]
  }
  return sum
}

console.log("4:sum of 2 arrays");
