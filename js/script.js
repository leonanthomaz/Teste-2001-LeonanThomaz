
let btn = document.getElementById("btn")
let aaa = document.querySelector('.menu-center-container')

btn.addEventListener('mouseenter', ()=>{

    const removeClass = () =>{
        aaa.style.setProperty('background', 'none')
    }
    removeClass()
//    if(aaa.style.setProperty('background', '#FA9401')){
//         aaa.style.setProperty('background', 'none')
//    }else{
//         aaa.style.setProperty('background', 'none')
//    }
})