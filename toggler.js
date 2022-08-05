
// Throttel

const printInput = (input)=>{
    
    console.log(input);
}

let timer;
const throttel = (fun,delay) =>{

    if(timer){
        return;
    }

    timer = setTimeout(() => {
        fun()
        timer = undefined;
    },delay);
}

let inputElement = document.getElementById('input')
inputElement.addEventListener('input',() =>{
    let input = document.getElementById('input').value
    throttel(()=>printInput(input),1000);
})


