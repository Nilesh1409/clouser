// Debounce
const debounce =  (func,delay)=>{
    
    let timer;
    return function(){
        

        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(func,delay)
    }

}


const print = ()=>{
    
    let input =  document.getElementById('debounce').value;
    console.log(input);
}
const de = debounce(print,1000)

let inputEle = document.getElementById('debounce')
inputEle.addEventListener('input',() =>{
    de()
})