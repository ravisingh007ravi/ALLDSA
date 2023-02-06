// Find the Maximum Repeating Number Program:-
// Question  N=4, x=3, Arr=[ 2, 2, 1, 2 ];

function maxRepeatingNumber(arr){

    let mp = new Map();
    for(let i in arr){
        let x = arr[i];
        if(mp.has(x)) mp.set(x,mp.get(x)+1)
        else mp.set(x,1)
    }
    let max = -Infinity;
    mp.forEach((value,key)=>{
        if(value>max){
            max = value;
        }
    })
    return max
}

console.log(maxRepeatingNumber([1,2,3,2,3,4,5,3,4,4,45,5,5,5,4,5]));