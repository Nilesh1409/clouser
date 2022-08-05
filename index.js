

function toggler(){
    let count = 0;

    return function (){
        count+=1;
        return count;
    }
}

const toggle = toggler();
console.log(toggle());
console.log(toggle());
console.log(toggle());
