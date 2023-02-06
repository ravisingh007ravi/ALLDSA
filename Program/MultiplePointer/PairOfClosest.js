// Find the Sum pair of closest Program:-
// Question
// N=6;
// x=54;
// Arr=[ 10, 22, 28, 29, 30,40 ];
// Output:- 22 30

function closest(arr, k) {

    let l = 0;
    let r = arr.length - 1;
    let diff = Infinity;
    let a, b;
    while (l < r) {
        let pairSum = arr[l] + arr[r];
        let curentDiff = Math.abs(pairSum - k);
        if (curentDiff < diff) {
            diff = curentDiff;
            a = arr[l];
            b = arr[r];
        }
        if (arr[l] + arr[r] < k) {
            l++;
        }
        else {
            r--;
        }
    }
    return (a + "-" + b)
}

let arr = [1, 2, 5, 4, 6, 35, 7, 45, 62, 80];
let k = 80;

console.log(closest(arr, k));