let OTP=document.querySelectorAll("input")
const button=document.querySelector("button")
const arr=["2","3","5","4"];
let message=document.querySelector(".message")
window.addEventListener("load" ,()=>OTP[0].focus());

OTP.forEach((input) => {
  input.addEventListener("input", ()=>{
    const curr1=input;
    const next1=input.nextElementSibling;

    if(curr1.value.length>1 && curr1.value.length==2)
    {
      curr1.value="";
    }
    if(next1!==null && next1.hasAttribute("disabled") && curr1.value !=="")
    {
      next1.removeAttribute("disabled");
      next1.focus();
    }
    if(!OTP[3].disabled && OTP[3].value !== "") 
    {
      button.classList.add("active");
    }else{
      button.classList.remove("active");
    }
  });
  input.addEventListener("keyup",(e)=>{
    if(e.key==='Backspace'){
      if(input.previousElementSibling!==null)
      {
        e.target.value= "" ;
        e.target.setAttribute("disabled",true)
        input.previousElementSibling.focus();
      }
    }
  })
});
button.addEventListener('click',(e)=>{
  e.preventDefault();
  OTP=Array.from(OTP);
    let a = true;
  console.log(OTP)
    OTP.forEach((elem,ind)=>{
      if(elem.value != arr[ind]){
        a= false;
      }
    })
  let v="";
    if(a == true){
      v="verified";
    }else{
      v="Not Verified";
    }
  message.classList.remove("message--displayoff")
  message.innerHTML+=v
  OTP.forEach((elm,ind)=>{
    elm.value="";
  })
})
