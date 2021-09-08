"use strict"

const getValue = require("prompt-sync")({sigint:true})

var name = getValue("Enter Your Name:")
console.log(name);