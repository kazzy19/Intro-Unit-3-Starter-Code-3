/* Declare variables below to save the different sections (divs) of your story*/
let YesButton = document.querySelector (".option-one");
let NoButton = document.querySelector (".option-two");
let FirstContinueButton = document.querySelector (".continue-one");
let SecondContinueButton = document.querySelector (".continue-two");
let ImageOne= document.querySelector (".option-one-screen")
let ImageTwo = document.querySelector (".option-two-screen");
let OptionOneEnd = document.querySelector (".option-one-end");
let OptionTwoEnd = document.querySelector (".option-two-end");

YesButton.onclick=function(){
    ImageOne.style.display="block";
};

NoButton.onclick=function(){
    ImageTwo.style.display="block";
};

FirstContinueButton.onclick=function(){
    OptionOneEnd.style.display="block";
};

SecondContinueButton.onclick=function(){
    OptionTwoEnd.style.display="block";
};
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
