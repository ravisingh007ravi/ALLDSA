var isValid = function (s) {
    let bracket = { '(': ')', '{': '}', '[': ']' }
    let data = [];
    for (let i in s) {
        if (bracket[s[i]]) {
            data.push(bracket[s[i]])
        }
        else {
            if (data.pop() !== s[i]) return false;     
        }
    }
    return (!data.length)
};

console.log(isValid("()[{}]{}"));