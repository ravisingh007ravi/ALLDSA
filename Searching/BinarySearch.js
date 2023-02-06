//BinarySearch Program
//that program function base
function BinarySearch(arr, k) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = parseInt((l + r) / 2);
        if (arr[mid] == k) return true
        else if (arr[mid] < k) l = mid + 1;
        else r = mid - 1;
    }
    return false
}

let SortedArr = [1, 2, 4, 6, 7, 8, 9, 10, 11, 25, 29, 48, 52, 78, 95, 100, 108];
let k = 78;
console.log(BinarySearch(SortedArr, k));

//that program recursion base
// let recursiveFunction = function (arr, target, l, r) {
//     if (l > r) return false;

//     let mid = Math.floor((l + r) / 2);

//     if (arr[mid] == target) return true;

//     if (arr[mid] > target) {
//         return recursiveFunction(arr, target, l, mid - 1);
//     }
//     else {
//         return recursiveFunction(arr, target, mid + 1, r);
//     }
// };

// let arr = [1, 2, 4, 6, 7, 8, 9, 10, 11, 25, 29, 48, 52, 78, 95, 100, 108];
// let target = 78;
// let l = 0;
// let r = arr.length - 1;

// console.log(recursiveFunction(arr, target, l, r));

