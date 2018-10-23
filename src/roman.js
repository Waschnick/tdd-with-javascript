function roman(romanNumber) {
    var chars = romanNumber.split("");
    var result = 0;
    for (var i = 0; i < chars.length; i++) {
        var singleValue = convertSingleDigit(chars[i]);
        var nextSingleValue = convertSingleDigit(chars[i + 1]);
        if (nextSingleValue > singleValue) {
            result -= singleValue;
        } else {
            result += singleValue;
        }
    }
    return "" + result;
}

function convertSingleDigit(romanNumber) {
    switch (romanNumber) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
    }
}