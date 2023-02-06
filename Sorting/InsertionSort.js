function incertionSort(arr, n) {

    for (let i = 1; i < arr.length; i++) {
       let currentValue = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}

let arr = [4,54,5,7,1,2,6,5,48,9,-8];
console.log(incertionSort(arr));