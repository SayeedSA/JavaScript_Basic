//assign value into an array & find value from an array
var studentName= ["sayeed", "ahmed","sabbir"]
var studentGpa= [3.5,4,3.65]

var findStudent= studentName[1]
console.log(findStudent)
console.log(studentName)
console.log(studentGpa)

//find index value using indexof
console.log(studentName.indexOf("sabbir"))

// find array length
console.log(studentName.length)

// insert value using push
studentName.push("sayeed")
console.log(studentName)
 
//delete value using pop
studentName.pop()
console.log(studentName)