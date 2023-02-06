// Find the reverse statement  String to Number Program
function reverString(str) {

    if (str.length == 0) return " "
    return reverString(str.slice(1)) + str[0]
}

function reverAllString(str) {
    let char = str.split(".")

    for (let i = 0; i < char.length; i++) {
        char[i] = reverString(char[i])
    }
    return char.join(".")
}

console.log(reverAllString("I.am.ravi.singh"));