let loginName = document.getElementById('loginName')
let loginPassword = document.getElementById('loginPassword');
let login_btn = document.getElementById('signIn')
let registerEmail = document.getElementById('registerEmail')
let registerPassword = document.getElementById('registerPassword');
let registerbtn = document.getElementById('registerbtn')


registerbtn.onclick = function(){
   localStorage.setItem("registerEmail",registerEmail.value);
   localStorage.setItem("registerPassword",registerPassword.value);
}  

login_btn.addEventListener('click',function(e){
     e.preventDefault()
    localStorage.setItem("loginEmail",loginName.value)
    localStorage.setItem("loginPassword",loginPassword.value)
    if(localStorage.getItem("loginEmail")=== localStorage.getItem("registerEmail") && localStorage.getItem("loginPassword")=== localStorage.getItem("registerPassword")){
          if(localStorage.getItem("loginEmail").includes("admin.com")){
             window.open("admin.html","_self")
          }else{
            window.open("user.html","_self")
          }       
    }else{
        alert("not equal")
    }
})





