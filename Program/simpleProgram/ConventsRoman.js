// Find the Convents Roman to Number Program

function NumberConverte(str) {

    let mp = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        let currentValue = mp[str[i]];
        let nextValue = mp[str[i + 1]]

        if (currentValue < nextValue) result += nextValue - currentValue;
        else result += currentValue;
    }
    return result
}
console.log(NumberConverte("VX"));