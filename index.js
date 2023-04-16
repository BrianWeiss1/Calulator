var str = "";
var answer = document.getElementById('answer');
var button9 = document.getElementById("9");
button9.addEventListener("click", function() {
    var str1 = "9";
    if ("%" == str[str.length-1]) {
       str = str + "*"
    }
    str = str + str1; 
    answer.textContent = str;
})
var button8 = document.getElementById("8");
button8.addEventListener("click", function() {
   if ("%" == str[str.length-1]) {
       str = str + "*"
    }
    var str1 = "8";
    str = str + str1;
    answer.textContent = str;
})
var button7 = document.getElementById("7");
button7.addEventListener("click", function() {
   if ("%" == str[str.length-1]) {
       str = str + "*"
    }
    var str1 = "7";
    str = str + str1;
    answer.textContent = str;
})
var button6 = document.getElementById("6");
button6.addEventListener("click", function() {
   if ("%" == str[str.length-1]) {
       str = str + "*"
    }
    var str1 = "6";
    str = str + str1;
    answer.textContent = str;
})
var button5 = document.getElementById("5");
button5.addEventListener("click", function() {
   if ("%" == str[str.length-1]) {
       str = str + "*"
    }
    var str1 = "5";
    str = str + str1;
    answer.textContent = str;
})
var button4 = document.getElementById("4");
button4.addEventListener("click", function() {
   if ("%" == str[str.length-1]) {
       str = str + "*"
    }
    var str1 = "4";
    str = str + str1;
    answer.textContent = str;
})
var button3 = document.getElementById("3");
button3.addEventListener("click", function() {
   if ("%" == str[str.length-1]) {
       str = str + "*"
    }
    var str1 = "3";
    str = str + str1;
    answer.textContent = str;
})
var button2 = document.getElementById("2");
button2.addEventListener("click", function() {
   if ("%" == str[str.length-1]) {
       str = str + "*"
    }
    var str1 = "2";
    str = str + str1;
    answer.textContent = str;
})
var button1 = document.getElementById("1");
button1.addEventListener("click", function() {
   if ("%" == str[str.length-1]) {
       str = str + "*"
    }
    var str1 = "1";
    str = str + str1;
    answer.textContent = str;
})
var button0 = document.getElementById("0");
button0.addEventListener("click", function() {
   if ("%" == str[str.length-1]) {
       str = str + "*"
    }
    var str1 = "0";
    str = str + str1;
    answer.textContent = str;
})
var buttonAC = document.getElementById("AC");
buttonAC.addEventListener("click", function() {
    var str1 = str.substring(0, str.length-1);
    str = str1;
    if (str.length == 0) {
       answer.textContent = "0"
    }
    else {
       answer.textContent = str; 
    }
})
var buttonperiod = document.getElementById(".");
buttonperiod.addEventListener("click", function() {
   if ("%" == str[str.length-1]) {
       str = str + "*"
    }
    var str1 = ".";
    var thing = false;
    for (var i = str.length-1; i>=0; i--) {
       if (str[i] == "+" || str[i] == "-" || str[i] == "*" || str[i] == "÷") {
           thing = false;
           break;
       }
       if (str[i] == ".") {
           thing = true;
           break;
       }
    }
    if (thing == true) {
    }
    else {
        str = str + str1;
        answer.textContent = str;
    }
})
var buttonplus = document.getElementById("+");
buttonplus.addEventListener("click", function() {
    var str1 = "+";
    if (str[str.length-1] == "+") {

    }
    else if (str[str.length-1] == "*" || str[str.length-1] == "÷" || str[str.length-1] == "-"){
       str = str.substring(0, str.length-1) + str1;
       answer.textContent = str;
    }
    else if (str.length == 0){
       str = "0" + str1;
       answer.textContent = str;
    }
    else {
        str = str + str1;
        answer.textContent = str;
    }
})
var buttonminus = document.getElementById("-");
buttonminus.addEventListener("click", function() {
    var str1 = "-";
    if (str[str.length-1] == "-") {

    }
    else if (str[str.length-1] == "*" || str[str.length-1] == "÷" || str[str.length-1] == "+"){
       str = str.substring(0, str.length-1) + str1;
       answer.textContent = str;
    }
    else if (str.length == 0){
       str = "0" + str1;
       answer.textContent = str;
    }
    else {
        str = str + str1;
        answer.textContent = str;
    }
})
var buttondivide = document.getElementById("÷");
buttondivide.addEventListener("click", function() {
    var str1 = "÷";
    if (str[str.length-1] == "÷") {
    }
    else if (str[str.length-1] == "*" || str[str.length-1] == "-" || str[str.length-1] == "+"){
       str = str.substring(0, str.length-1) + str1;
       answer.textContent = str;
    }
    else if (str.length == 0){
       str = "0" + str1;
       answer.textContent = str;
    }
    else {
        str = str + str1;
        answer.textContent = str;
    }
})
var buttonmultiply = document.getElementById("*");
buttonmultiply.addEventListener("click", function() {
    var str1 = "*";
    if (str[str.length-1] == "*") {
    }
    else if (str[str.length-1] == "÷" || str[str.length-1] == "-" || str[str.length-1] == "+"){
       str = str.substring(0, str.length-1) + str1;
       answer.textContent = str;
    }
    else if (str.length == 0){
       str = "0" + str1;
       answer.textContent = str;
    }
    else {
        str = str + str1;
        answer.textContent = str;
    }
})
var buttonpercent = document.getElementById("%");
buttonpercent.addEventListener("click", function() {
    var str1 = "%";
    if (str[str.length-1] == "%") {

    }
    else if (str.length == 0){
       str = "0" + str1;
       answer.textContent = str;
    }
    else {
        str = str + str1;
        answer.textContent = str;
    }
}) 
var buttonplusorminiss = document.getElementById("+/-");
buttonplusorminiss.addEventListener("click", function() {
   num = "";
   var counter = 0;
   if (str.length == 0) {
       str = "0"
   }
   for (var i = str.length - 1; i>=0; i--) {
       if (str[i] == "*" || str[i] == "÷") {
           break;
       }
       else if (str[i] == "+" || str[i] == "-" ) {
           counter += 1;
           break;
       }
       else {
           counter +=1; 
       }
   }
   for (var i = str.length - counter; i<str.length; i++) {
       num = num + str[i];
   }
   if (num[0] == "-") { 
       num[0] = ""
       num = num.substring(1, num.length)
       var firstsubstring = str.substring(0, str.length-counter);
       if (firstsubstring.length != 0) {
           str = firstsubstring + "+" + num;
       }
       else {
           str = firstsubstring + num;
       }
       answer.textContent = str;
   }
   else {
       num2 = "-";
       for (var i = 0; i<num.length; i++) {
           num2 = num2 + num[i];
       }
       if (num2[1] == "+") {
           num2 = num2[0] + num2.substring(2, num2.length);
       }
       str = str.substring(0, str.length-counter) + num2;
       answer.textContent = str;
   }
})
var buttoneql = document.getElementById("=");
buttoneql.addEventListener("click", function() {
   for (var i = 0; i<str.length; i++) {
       if (str[i] == "÷") {
           str = str.substring(0, i) + "/" + str.substring(i+1, str.length);
       }
       if (str[i] == "%") {
           str = str.substring(0, i) + "*0.01" + str.substring(i+1, str.length);
       }
   }
   const expression = str;
   var result = eval(expression);
   var resultstr = result.toString();
   str = resultstr;
   answer.textContent = str;
})