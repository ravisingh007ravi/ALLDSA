// Find the Reverse Array Program

function reverNumber(str) {

    if (str.length == 0) return ""
    return reverNumber(str.slice(1)) + str[0]+","
}
console.log(reverNumber([1,2,3,4,5,6,7,8]));