const pass_filed = document.querySelector(".pass-key");
const show_Btn = document.querySelector(".show");
show_Btn.addEventListener("click",function(){
    if(pass_filed.type==="password"){
        pass_filed.type="text";
        show_Btn.textContent="HIDE";
        show_Btn.style.color="#3498db"
    }
    else{
        pass_filed.type="password";
        show_Btn.textContent="SHOW";
        show_Btn.style.color="#222"
    }
})