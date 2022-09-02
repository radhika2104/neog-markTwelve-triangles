// Angles of Triangles
var angles = document.querySelectorAll('.angle-input')
var anglesButton = document.querySelector('#btn-angles')
var anglesMessage = document.querySelector('#message')

function checkAngleValid(angle){
    // Check if each angle is valid
    if (angle.value <= 0){
        anglesMessage.innerText = 'Ohh no! Triangles always have angles greater than 0°'
        return false;
    } else if (isNaN(angle.value)){
        anglesMessage.innerText = 'Please enter a valid numeric value, not text!'
        return false;
    }
    return true;
}
function calculateAngleSum(){
    var sumAngles = 0;
    var angleValid = null;
    // Loop through angles
    for (let angle of angles) {
        angleValid = checkAngleValid(angle);
        // Return if angle is invalid
        if (angleValid === false){
            return
        }
        // sum angles if valid
        sumAngles += Number(angle.value);
    }
    // Declare if its a triangle if sum is 180
    if (sumAngles === 180){
        anglesMessage.innerText = 'Yaas! Its a triangle!'
    } else{
        var difference = (sumAngles - 180)
        if (difference > 0){
            anglesMessage.innerText = 'Ohh no! Its not a triangle! The total sum of all angles is in excess by ' + difference + '°'
        } else{
            anglesMessage.innerText = 'Ohh no! Its not a triangle! The total sum of all angles is short by ' + Math.abs(difference) + '°'
        }
    }
}

if (anglesButton) {
    anglesButton.addEventListener('click',calculateAngleSum)
}


// Quiz Form
var form = document.querySelector('#quiz-form');
var answerButton = document.querySelector('#btn-answer');
var scoreOutput = document.querySelector('#score-div');

var answers = [
    'Right',
    'Equilateral triangle',
    '30',
    '30, 90, 60',
    'Obtuse',
    'no',
    '1 obtuse angle',
    '3, 4, 5',
    'c^2',
    'Isoceles',

]

function calculateScore() {
    
    var formResults = new FormData(form);
    let index = 0;
    let score = 0;
    for (let selection of formResults.values()){
        if (selection === answers[index]){
            score++;
        }
        index++;
    }
    if (score < 4){
        scoreOutput.innerText = 'Uh oh! Your score is ' + score + '. Try again!'
    } else if (score < 7){
        scoreOutput.innerText = 'Not bad! Your score is ' + score 
    } else{
        scoreOutput.innerText = 'You are a champ! Your score is ' + score 
    }
    
};

if (answerButton){
    answerButton.addEventListener('click',calculateScore)
}

// Calculate Hypotenuse

var baseInput = document.querySelector('#base-input');
var heightInput = document.querySelector('#height-input');
var hypoButton = document.querySelector('#btn-hypo');
var hypoMessage = document.querySelector('#hypo-message');

function checkValidSide(sidename,side,container){
    if (side <= 0){
        container.innerText = 'Enter ' + sidename + ' length greater than 0'
        return false;
    } else if (isNaN(side)){
        container.innerText = 'Error: you have entered text!'
        return false;
    }
    return true;
}

function rounded(num){
    return Math.round(num * 100) / 100
}

function calculateHypo() {
    var base = baseInput.value
    var validBase = checkValidSide('Base',base,hypoMessage);
    var height = heightInput.value
    var validHeight = checkValidSide('Height',height,hypoMessage)
    if (validBase === false && validHeight === false){
        hypoMessage.innerText = 'Enter sides greater than 0'
     
    }
    else if (validBase === true && validHeight === true){
        var hypo = Math.sqrt(Math.pow(base,2) + Math.pow(height,2));
        var hypo = rounded(hypo);
        hypoMessage.innerText = 'The length of hypotenuse is ' + hypo +' units'
    }
}

if (hypoButton) {
    hypoButton.addEventListener('click',calculateHypo)
}

// calculate Area 

var areaButton = document.querySelector('#btn-area') ;
var messageArea = document.querySelector('#area-message');
var sides = document.querySelectorAll('.side-input');

function checkTriangleValidity(a,b,c){
    // check if sum of two sides is greater than third
    if (((a + b) > c ) && ((c + b) > a) && ((a + c) > b)){
        return true;
    }
    return false;
}
function calculateArea() {
    for (let side of sides){
        // Check if sides are valid
        var validSide = checkValidSide('side',side.value,messageArea)
        if (validSide === false){
            return
        }
    }
    // assign variables
    var a = Number(sides[0].value)
    var b = Number(sides[1].value)
    var c = Number(sides[2].value)
    // check whether triangle sides are valid 
    var trianglevalid = checkTriangleValidity(a,b,c)
    if (trianglevalid === false){
        messageArea.innerText = 'Incorrect lengths of triangle. Sum of 2 sides is always greater than third.'
        return
    }
    else {
        var s = (a + b + c)/2
        // use formula
        var area = Math.sqrt(s * (s - a)* (s - b)* (s - c))
        // round up value
        var area = rounded(area)
        // display div
        messageArea.innerText = 'The area of triangle is ' + area + ' units.'
        
    }
    
}

if (areaButton) {
    areaButton.addEventListener('click',calculateArea)
}


