const prompt=require("prompt-sync")({sigint:true});

function Exercise1() {  
    var input = prompt("Input the wolrd: ");
    var result  = [];
    
    var left = 0;
    
    for(let right = 0; right < input.length; right++)
    {
        if(right == 0)
        {
            input = input.charAt(0).toUpperCase() + input.slice(1);
            left = right;
        }
        if(input.charAt(right-1) == " ")
        {
            var check  = input.slice(left, right-1);
            check = check.charAt(0).toUpperCase() + check.slice(1);
            result.push(check);
            left = right;
        }
        if(right == input.length - 1)
        {
            var check  = input.slice(left, right+1);
            check = check.charAt(0).toUpperCase() + check.slice(1);
            result.push(check);
        }
    }
    return result.join(' ');
}

function Exercise2(input) {
    var result = 0;
    for(let i = 0; i < input.length; i++)
    {
        if(result < input[i])
        {
            result = input[i];
        }
    }
    return result
}


function Exercise3(input) {
    if(input.lenth < 3)
    {
        return input
    }
    var result = [];
    
    var right = input.length-3;
    while(right != input.length) {
        result.push(input[right]);
        right++;
    }
    for(let left = 0; left < input.length - 3; left++) {
        result.push(input[left]);
    }
    return result.join('');
}


function Exercise4(input) {
    if(input >= 0 && input < 90) {
        return "Acute Angle";
    }
    else if(input == 90) {
        return "Right Angle";
    }
    else if(input > 90 && input < 180) {
        return "Obtuse Angle";
    }
    else if(input == 180) {
        return "Straigth Angle";
    }
    else
    {
        return "Error"
    }
}

function Exercise5(input, number) {
    var max = 0;
    for(let i = 0; i < input.length - (number - 1); i++)
    {
        var left = i;
        var right = i + number;
        var check = 0
        while(left < right) {
            check += input[left];
            left++
        }
        max = Math.max(max, check);
    }
    return max;
}
console.log("Exercise 1: ")
console.log(Exercise1());

var input = [1,0,1];
var input1 = [0, -10, -20];
var input2 = [1000, 510, 440];
console.log("Exercise 2: ")
console.log(Exercise2(input));
console.log(Exercise2(input1));
console.log(Exercise2(input2));

console.log("Exercise 3: ")
console.log(Exercise3("Python"));
console.log(Exercise3("JavaScript"));
console.log(Exercise3("Hi"));

console.log("Exercise 4: ")
console.log(Exercise4(47));
console.log(Exercise4(90));
console.log(Exercise4(145));
console.log(Exercise4(180));

console.log("Exercise 5: ")
console.log(Exercise5([1, 2, 3, 14, 5], 2));
console.log(Exercise5([2, 3, 5, 1, 6], 3));
console.log(Exercise5([9, 3, 5, 1, 7], 2));

