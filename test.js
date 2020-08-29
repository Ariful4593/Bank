// balance = document.getElementById("balance").innerHTML = 350;

// function depositBalance(){
//     deposit = document.getElementById("deposit").innerHTML = 0;
//     depositInput = parseInt(document.getElementById("deposit-input").value);
//     document.getElementById("deposit").innerHTML = depositInput+deposit;
//     document.getElementById("balance").innerHTML = balance + depositInput
// }

// function withdrawBalance(){
//     withdraw = document.getElementById("withdraw");
//     withdrawAmount = parseInt(document.getElementById("withdraw-input").value);
//     if(withdrawAmount>=balance)
//     {
//         alert("Sorry you haven't Availble Balance")
//     }
//     else if(withdrawAmount == null){
//         alert("Please fill input box first")
//     }
//     else{
//         document.getElementById("withdraw").innerHTML = withdrawAmount;
//         document.getElementById("balance").innerHTML = balance - withdrawAmount;
//     }
    
// }

// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     console.log(charactersLength)
//     for ( var i = 0; i < length; i++ ) {
//        result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//  }
 
//  console.log(makeid(10));

function makeIt(length){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charLength = characters.length;
    for(var i=0;i<length; i++)
    {
        result = result + characters.charAt(Math.floor(Math.random()*charLength));
    }
    return result;
}
console.log(makeIt(5))