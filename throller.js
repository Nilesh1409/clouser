
function toggler(...arguments){
    let count = 0;
    let arg = arguments

    return function (){
        // count+=1;
        
        if(arg[count]===undefined){
             count = 0;
        }
        return arg[count++];
    }
}

const toggle = toggler(1,2,3);
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
