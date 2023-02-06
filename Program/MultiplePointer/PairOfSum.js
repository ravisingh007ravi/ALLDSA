// Find the pair of sums Program:-
// Question
// N=4;
// K=6;
// Arr=[ 1, 5, 7, 1 ];

function pairOfSum(arr,k) {
    let i = 0;
    let j = arr.length-1;
    while (i < j) {
        if (arr[i] + arr[j] == k) return true;
        else if (arr[i] + arr[j] > k) --j;
        else ++i
    }
    return false;
}

let SortedArr = [1, 4, 5, 6, 7, 12, 76, 87];
let k = 18;

console.log(pairOfSum(SortedArr, k));