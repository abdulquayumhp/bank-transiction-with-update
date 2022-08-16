

const btnDiposite = document.getElementById("btnDiposite");

btnDiposite.addEventListener("click",function(){
  

    //    step one 
    const DepositeAmount = document.getElementById("DepositeAmount");
   const DepositeAmountString = DepositeAmount.value;
   const AddDepositeAmount = parseFloat(DepositeAmountString);
   DepositeAmount.value = "";

    //    if not a number 
   if(isNaN(AddDepositeAmount)){
    alert("please provide a valid number")
    return;

   }


    //    step two 

    const depositeTotal = document.getElementById("depositeTotal");
    const depositeAddAmountString = depositeTotal.innerText;
    const depositeAddAmount = parseFloat(depositeAddAmountString);

    // step three 
    const balanceTotal = document.getElementById("balanceTotal");
    const balanceTotalAmountString = balanceTotal.innerText;
    const  balanceTotalAmount = parseFloat(balanceTotalAmountString)



    // step four 
    const currentAmount = AddDepositeAmount + depositeAddAmount;
    depositeTotal.innerText = currentAmount;


    //setp five
    const totalBalance = balanceTotalAmount + AddDepositeAmount;
    balanceTotal.innerText = totalBalance;

});




    // withdro section start 
    // withdro section start 
    // withdro section start 


   
   
const btnWithdrow = document.getElementById("btn-withdrow");

btnWithdrow.addEventListener("click",function(){

    // step one 
    const withdrowAmount = document.getElementById("withdrow-Fild");
    const withdroSring = withdrowAmount.value;
    const addWithdroAmount = parseFloat(withdroSring);
    withdrowAmount.value = "";


    // if not a number 
    if(isNaN(addWithdroAmount)){
        alert("please provide a valid number ");
        return;
    }


    //step two
    const withdroTotal = document.getElementById("withdrwo-Total");
    const withdroTotalString = withdroTotal.innerText;
    const withdrowTotal = parseFloat(withdroTotalString);


    //step three

    const withdrowBalanceTotal = document.getElementById('balanceTotal');
    const withdrowBalanceTotalString = withdrowBalanceTotal.innerText;
    const withdroBalanceAdd = parseFloat(withdrowBalanceTotalString);


    // if withdow amount is geter than total amount 
    if(addWithdroAmount > withdroBalanceAdd){
        alert("don't have suffacient money");
        return;
    }

    //step four


    const currentWithdrwoAmount = addWithdroAmount + withdrowTotal;
    withdroTotal.innerText = currentWithdrwoAmount;


    // step five 

    const totalWithdrowBalance = withdroBalanceAdd - addWithdroAmount;
    withdrowBalanceTotal.innerText = totalWithdrowBalance;


});

