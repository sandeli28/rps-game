     function gamestart(){
       // const rock=document.querySelector(".btnr");
       // const paper=document.querySelector(".btnp");
       // const scissors=document.querySelector(".btns");
        
        
    //const userchoice=[rock,paper,scissors];
       // userchoice.forEach(option=>{option.addEventListener('click',function()
           // {
           // winner(rock.innertext,compchoice)

        //})
   // })
   
   const option=document.querySelectorAll(".image");
   option.forEach((option)=>{
    option.addEventListener("click",function(){
        const userchoice=this.alt;
        const choices=['rock','paper','scissors'];
    const compchoice=choices[Math.floor(Math.random()*choices.length)];
        winner(userchoice,compchoice)

    });
   });
    
    
     }
    

function winner(userchoice,compchoice){

    const result=document.querySelector(".result");
    console.log(compchoice);  
    
    document.querySelector(".comp").innerText=`${compchoice}`;
    document.querySelector(".user").innerText=`${userchoice}`;

    if (userchoice === compchoice) 
        {
         result.textContent="a tie!" ;
    }
    
    else if ((userchoice === 'rock' && compchoice === 'scissors') ||
        (userchoice === 'paper' && compchoice === 'rock') ||
        (userchoice === 'scissors' && compchoice === 'paper')) {
            result.textContent= 'You win!';
    } else {
        result.textContent= 'You lose!';
    }
    const reloadBtn = document.querySelector('.reload');
    reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
}
let userInput = window.prompt("Please Enter your Name");
document.querySelector(".username").innerText=`${userInput.toUpperCase()}`;
gamestart();
