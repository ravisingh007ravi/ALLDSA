// Find the Frequency of String Program:-
// Question
// char=”Ravi Singh”;

function fre (str){
    let mp = new Map();

    for(let i in str){
        if(mp.has(str[i])){
            mp.set(str[i],mp.get(str[i])+1);
        }
        else {
            mp.set(str[i],1)
        }
    }
    let newarr = "";
    mp.forEach((value,key)=>{
        if(key!=" "){
            newarr+= (key+"-"+value+"\n")
        }
    })
    return newarr
}

console.log(fre("Ravi Singh is a Good web develaper"));