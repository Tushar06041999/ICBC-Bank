
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


   


    // addDeposit.addEventListener("click", function(){
    //    let currentBalance1=parseFloat(currentBalance.innerText);
    //    let depositAmmount1=parseFloat(depositAmmount.value);
    //    let currentDeposit1=parseFloat(currentDeposit.innerText);
    //    let withdraw2=parseFloat(withdraw.innerText);
    //    let total=depositAmmount1 + currentDeposit1  ;
    //    currentDeposit.innerText=total- withdraw2;
    //    currentBalance.innerText=total;
    //    currentBalance2.innerText=currentBalance;
    //    depositAmmount.value="";

    //    if(currentDeposit===NaN){
    //        currentDeposit.innerText=0;
    //    }else{
    //     currentDeposit.innerText=total;
    //    }
    // })


//    withdrawDeposit.addEventListener("click",function(){

//        let currentBalance2=parseFloat(currentBalance.innerText);
//        let withdrawAmmount1=parseFloat(withdrawAmmount.value);
//        let withdraw1=parseFloat(withdraw.innerText);
//        let total1=withdrawAmmount1 + withdraw1;
//        withdraw.innerText=total1;
//        let currentBalance3=currentBalance2 - withdrawAmmount1 ;
//        currentBalance.innerText=currentBalance3;
//        withdrawAmmount.value="";
//    })

   
//    addDeposit.addEventListener("click",function(){
//        let inputDeposit=parseInt(depositAmmount.value) ;
//        let total=parseFloat(currentDeposit.innerHTML);
//        let another1=inputDeposit+total;
//        console.log(another1);
    

//        depositAmmount.value="";
//    })

//    withdrawDeposit.addEventListener("click",function(){
//        let inputWithdraw=withdrawAmmount.value;
//       withdraw.innerHTML=inputWithdraw;
//       withdrawAmmount.value="";
//    })

// start New code from HEre And try to accurate everthing

let depositAmmount=document.getElementById("depositAmmount");
let addDeposit =document.getElementById("addDeposit");
let currentDeposit=document.getElementById("currentDeposit");

let withdraw=document.getElementById("withdraw");
let withdrawAmmount=document.getElementById("withdrawAmmount");
let withdrawDeposit=document.getElementById("withdrawDeposit");



let currentBalance=document.getElementById("currentBalance");

addDeposit.addEventListener("click",function(){

let depositAmmount1=parseFloat(depositAmmount.value);
let currentDeposit1=parseFloat(currentDeposit.innerText);
let totaldeposit=depositAmmount1+currentDeposit1;
currentDeposit.innerText=totaldeposit;

//Balance Section start from Here 
const currentbal=parseFloat(currentBalance.innerText);
const total=depositAmmount1+currentbal;
currentBalance.innerText=total;

document.getElementById("depositAmmount").value="";




})

withdrawDeposit.addEventListener("click",function(){

    let withdrawAmmount1=parseFloat(withdrawAmmount.value);
    let withdraw1=parseFloat(withdraw.innerText);
    let totalwithdraw=withdrawAmmount1+withdraw1;
    withdraw.innerText= totalwithdraw;
    
//    balnce section start from Here
const balance=currentDeposit.innerText -withdraw.innerText;
currentBalance.innerText=balance;
    
    document.getElementById("withdrawAmmount").value="";
    
    
    
    })

  

