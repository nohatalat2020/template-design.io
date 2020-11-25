




// active class for menu button

const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');

hamburger_menu.addEventListener("click", ()=>{
   container.classList.toggle('active');
  
});



//join us modal form

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const form_body = document.querySelector(".container-fluid");

sign_up_btn.addEventListener('click',()=>{
   form_body.classList.add("sign-up-mode");

});
sign_in_btn.addEventListener('click',()=>{
   form_body.classList.remove("sign-up-mode");

});


//contact us form
const inputs = document.querySelectorAll(".input");

function focusFunc(){
   let parent = this.parentNode;
   parent.classList.add("focus");
}


function blurFunc(){
   let parent = this.parentNode;
   if(this.value == ""){
      parent.classList.remove("focus");
   }
}

inputs.forEach((input) =>{
   input.addEventListener("focus" ,focusFunc);
   input.addEventListener("blur" ,blurFunc);

})



