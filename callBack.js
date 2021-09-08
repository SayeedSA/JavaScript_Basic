//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function  callback(name,id,club) {
    console.log(name)
    console.log(id)
    club()
}

function ItClub(params) {
    console.log("president of It Club")
}

function eeeClub(params) {
    console.log("president of EEE Club")   
}

callback("sayeed",95,ItClub)
callback("Other",95,eeeClub)