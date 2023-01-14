let burguer= document.getElementById('burguer-icon')
let nav = document.getElementById('nav')

let i=0
burguer.addEventListener('click',function(){
    //  let x= document.createElement('img')
    i++

    if(i % 2==0){
        burguer.src='./images/icon-hamburger.svg'
        nav.style.display='none'
    }else if(i %2 ==1){
         burguer.src='./images/icon-close.svg'
 nav.style.display='flex'
  console.log(i)
    }

   
     
     
})