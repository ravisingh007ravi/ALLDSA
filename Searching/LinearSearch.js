// Linear Seach Program
function linearSeach(arr, k) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) return true;
    }
    return false;
}

console.log(linearSeach([12, 15, 345, 65, 47, 8, 7, 8, 9, 6, 5, 7, 8, 7, 78], 50));