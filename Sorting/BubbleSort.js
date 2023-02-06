function bubbleSort(arr) {
    for (let i in arr) {
        for (let j = 0; j < (arr.length - i); j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

let arr = [23, 2, 3, 4, 5, 6, 5, -7, 8, -6];
console.log(bubbleSort(arr));