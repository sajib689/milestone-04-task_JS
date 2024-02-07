function temperatureConverter(valNum) {
    const temp = parseFloat(((valNum - 32) * 5/9).toFixed(2))
    return temp
}

// console.log(temperatureConverter(103))
function checkTriangle(side1, side2, side3) {
    if ((side1 === side2 && side2 !== side3) || (side1 === side3 && side2 !== side3) || (side2 === side3 && side1 !== side2)) {
        return 'Yes';
    } else {
        return 'No';
    }
}

 console.log(checkTriangle(9,8,9))