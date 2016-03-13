
function pow(x, n) {
    if (x < 0 | x > 100 | n < 0 | n > 100) return -1;

    var result = x;
    for (var i = 0; i < n-1; i++) {
        result = result * x;
    }

    return result;
}


function clickButtonPow() {
    var x = prompt("Enter number:");
    var n = prompt("Enter extent:");
    var result;
    x = parseInt(x);
    n = parseInt(n);

    if (isNaN(x) | isNaN(n)) {
        alert("You must enter the numbers!");
        return false;
    }

    result = pow(x, n);
    if (result == -1) {
        alert("Entered invalid values!");
        return false;
    }

    alert(x + " in degrees " + n + " = " + pow(x, n));
    return true;
}

function clickButtonName() {
    var names = new Array();

    for (var i = 0; i < 5; i++) {
        var newName = prompt("Enter name " + (i + 1));
        names.push(newName);
    }

    serchName = prompt("enter the desired name");

    if (existenceArr(names, serchName)) {
        alert(serchName + ", you have successfully entered!")
    }
    else {
        alert("User '" + serchName + "' not found!")
    }
}


function existenceArr(arr, checkItem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == checkItem) return true;
    }

    return false;
}