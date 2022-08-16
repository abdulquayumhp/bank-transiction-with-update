

const inputbtn =  document.getElementById('btnSubmit');

inputbtn .addEventListener("click",function(){
    // step one 
    const inputValue = document.getElementById("userEmail");
    const inputValueItem = inputValue.value;
    

    // step two 

    const inputPassword = document.getElementById("userPasward");
    const inputPasswordItem = inputPassword.value;

    // step three 
    if(inputValueItem == "abdulquayumhp998@gmail.com" && inputPasswordItem == "hpabid244"){
        window.location.href = "index.html";

    }else{
        alert("invalid user")
    }
});