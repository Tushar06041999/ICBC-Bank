
        const loginArea=document.getElementById('login');
        loginArea.addEventListener('click',function(){
            const loginBtn=document.getElementById("login-area");
            loginBtn.style.display="none";
            const transationArea=document.getElementById('transation-area');
            transationArea.style.display="block";
        })

        // const depositBtn=document.getElementById("addDeposit");
        // depositBtn.addEventListener("click",function(){
        //     const depositAmmount=document.getElementById("depositAmmount").value;
        //     const depositNumber=parseFloat(depositAmmount);

        //     updateSpanText("currentDeposit", depositNumber);
        //     updateSpanText("currentBalance", depositNumber);

        //     document.getElementById("depositAmmount").value="";

        // })
        // function updateSpanText(id, depositNumber){
        //     const current=document.getElementById('id').innerText;
        //     const currentNumber=parseFloat(current);
        //     const totalAmmount=depositNumber + currentNumber ;
        //     document.getElementById("id").innerText=totalAmmount;

        // }


    let currentDeposit=document.getElementById("currentDeposit");
    let depositAmmount=document.getElementById("depositAmmount");
    let addDeposit =document.getElementById("addDeposit");



    let withdraw=document.getElementById("withdraw");
    let withdrawAmmount=document.getElementById("withdrawAmmount");
    let withdrawDeposit=document.getElementById("withdrawDeposit");



    let currentBalance=document.getElementById("currentBalance");


    addDeposit.addEventListener("click", function(){
       let currentBalance1=parseFloat(currentBalance.innerText);
       let depositAmmount1=parseFloat(depositAmmount.value);
       let currentDeposit1=parseFloat(currentDeposit.innerText);
       let total=depositAmmount1 + currentDeposit1 ;
       currentDeposit.innerText=total;
       currentBalance.innerText=total;
    //    currentBalance2.innerText=currentBalance;
       depositAmmount.value="";

       if(currentDeposit===NaN){
           currentDeposit.innerText=0;
       }else{
        currentDeposit.innerText=total;
       }
    })


   withdrawDeposit.addEventListener("click",function(){

       let currentBalance2=parseFloat(currentBalance.innerText);
       let withdrawAmmount1=parseFloat(withdrawAmmount.value);
       let withdraw1=parseFloat(withdraw.innerText);
       let total1=withdrawAmmount1 + withdraw1;
       withdraw.innerText=total1;
       let currentBalance3=currentBalance2 - withdrawAmmount1 ;
       currentBalance.innerText=currentBalance3;
       withdrawAmmount.value="";
   })

   
   let currentBalance2=currentBalance1 + currentDeposit.innerText - withdraw.innerText;
   console.log(currentBalance1)
