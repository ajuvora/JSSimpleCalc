var firstInput;
var secondInput;
var output;
var regex = /^[0-9]+$/;

function addValue(){
    firstInput = document.getElementById('input_a').value;
    secondInput = document.getElementById('input_b').value;

    if (!firstInput.match(regex))
    {
        alert("please enter a whole number");
    }else if(!secondInput.match(regex))
    {
        alert("Please enter a whole number");
    }

    firstInput = parseInt(firstInput,10);
    secondInput = parseInt(secondInput,10);

    output = firstInput + secondInput;

    var outText = (firstInput + " + " + secondInput + " = " + output);

    document.getElementById('output').innerHTML = outText;
    console.log(outText);
}


function mulValue(){
    firstInput = document.getElementById('input_a').value;
    secondInput = document.getElementById('input_b').value;

    if (!firstInput.match(regex))
    {
        alert("please enter a whole number");
    }else if(!secondInput.match(regex))
    {
        alert("Please enter a whole number");
    }

    firstInput = parseInt(firstInput,10);
    secondInput = parseInt(secondInput,10);

    output = firstInput * secondInput;

    var outText = (firstInput + " x " + secondInput + " = " + output);

    document.getElementById('output').innerHTML = outText;
    console.log(outText);
}

function divValue(){
    firstInput = document.getElementById('input_a').value;
    secondInput = document.getElementById('input_b').value;

    if (!firstInput.match(regex))
    {
        alert("please enter a whole number");
    }else if(!secondInput.match(regex))
    {
        alert("Please enter a whole number");
    }

    firstInput = parseInt(firstInput,10);
    secondInput = parseInt(secondInput,10);

    output = firstInput / secondInput;

    var outText = (firstInput + " / " + secondInput + " = " + output);

    document.getElementById('output').innerHTML = outText;
    console.log(outText);
}


