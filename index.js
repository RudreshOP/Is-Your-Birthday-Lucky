const birthDate = document.querySelector("#birth-date");
const luckyNo = document.querySelector("#lucky-number");
const button = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box")

function comparevalues(sum,luckyNo){
    if(sum%luckyNo===0){
        outputBox.innerText="Your Birthdate is Lucky !";
    }
    else{
        outputBox.innerText="Sadly Your Birthdate is unlucky !";
    }
}
function checkBirthdateIsLucky(){
    
    const dob = birthDate.value;
    const sum = calculateSum(dob);
    comparevalues(sum, luckyNo.value);
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum=0;
    for(let index=0;index<dob.length;index++){
        sum= sum + Number(dob.charAt(index));
    }
    return sum;

}

button.addEventListener('click' , checkBirthdateIsLucky);

