/* 
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 


*/

var addTwoPromises = async function (promise1, promise2) {
  return new Promise(function (resolve, reject) {
    promise1
      .then(function (result1) {
        promise2
          .then(function (result2) {
            resolve(result1 + result2);
          })
          .catch(function (error) {
            reject(error);
          });
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
