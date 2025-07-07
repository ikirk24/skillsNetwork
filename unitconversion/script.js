function cToF () {
    //Fetching elements 
    var celsius = document.getElementById('c').value;
    var fahrenheit = document.getElementById('f');
    //convert celsius to fahrenheit and push it onto screen
    fahrenheit.value = (celsius * 9 / 5) + 32;
    return;
}

function pToKgs() {
    //Fetch Elements
    var kg = document.getElementById('kilo');
    var pounds = document.getElementById("pounds");
    //Convert pounds to kg and push it onto the screen
    pounds.value = kg.value * 2.2;
    return;
}

function kmsToMiles() {
    //Fetch Elements 
    var kms = document.getElementById('kms');
    var miles = document.getElementById('miles');
    //Convert kms to miles and push it onto screen
    miles.value = kms.value * 0.62137;
}