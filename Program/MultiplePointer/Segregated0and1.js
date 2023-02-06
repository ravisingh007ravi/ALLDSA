function segregate(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        if (arr[l] == 0) {
            l++;
            continue;
        }
        if (arr[r] == 1) {
            r--;
            continue;
        }
        arr[l] = arr[l] + arr[r];
        arr[r] = arr[l] - arr[r];
        arr[l] = arr[l] - arr[r];
        l++;
        r--;
    }
    return arr

}

console.log(segregate([0, 1, 0, 1, 1, 1, 0, 0, 0, 0]));