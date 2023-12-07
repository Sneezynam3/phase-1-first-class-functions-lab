// Assign functions to a variable.
// Store functions in a data structure.
// Write functions that return other functions.
// Pass a function to another function.
// Call a function returned by another function.


// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return multiplier * fare;
    };
};


const fareDoubler = function (fare) {
  const doubleFare = createFareMultiplier(2)
    return doubleFare(fare);
};


const fareTripler = function (fare) {
    const fareTripler = createFareMultiplier(3)
      return fareTripler(fare);
  };


const selectDifferentDrivers = (driverArray, callBack) => {
    return callBack(driverArray);
};