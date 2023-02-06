// Find the Maximum Repeating Number greater than one Program:-
// Question
// N=4;
// Arr=[ 2, 2, 1, 2 ];

let MaxReapitingNoGTOne = (arr) => {
    let mp = new Map();
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        if (mp.has(x)) mp.set(x, mp.get(x) + 1);
        else mp.set(x, 1);
    }
    let ans = [];
    mp.forEach((value, key) => {
        if (value > 1) ans.push(key)
    })
    if (ans.length == 0) ans.push("No data")
    ans.sort(function (a, b) { return a - b })
    return ans
}
console.log(MaxReapitingNoGTOne([0, 3, 1, 1, 3, 2, 2, 2,]));