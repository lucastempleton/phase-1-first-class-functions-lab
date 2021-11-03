// Code your solution in this file!
const returnFirstTwoDrivers = (function(){
    return ["Sally", "Bob"]
    
})
const returnLastTwoDrivers = (function(){
    return ["Freddy", "Claudia"]
})
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    

    const fareQuad = (fees) => {
        return fees * 4
    }
    const fareDoubler = (fees) => {
        return fees * 2;
    }
    const fareTripler = (fees) => {
        return fees * 3;
    }
    const fareQuintupler = (fees) => {
        return fees * 5;
    }
function createFareMultiplier(func){
    if (func === 2){
        return fareDoubler;
    }
    else if (func === 3){
        return fareTripler;
    }
    else if (func === 4){
        return fareQuad;
    }
    else if (func === 5){
        return fareQuintupler;
        }
}

function selectDifferentDrivers (arrayOfDrivers, f){
    if (f === returnFirstTwoDrivers){
        arrayOfDrivers = returnFirstTwoDrivers();
    }
    else if (f === returnLastTwoDrivers){
        arrayOfDrivers =  returnLastTwoDrivers();
    }
    return arrayOfDrivers
}