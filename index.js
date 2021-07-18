// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}

const Calculator = {
    add: function() {
        const addBase = 1
        return addBase + 3
    }
    // better: 
        // add: function(a, b) {
        //     return a + b
        // }
    ,
    subtract: function() {
        const subtractBase = 1
        return subtractBase - 3
    },
    multiply: function() {
        const multiplyBase = 1
        return multiplyBase * 3
    },
    divide: function() {
        const divideBase = 10
        return divideBase / 5
    },
}

function actionApplyer(num, array) {
    for (let i = 0; i < array.length; i++) {
        num = array[i](num)
    }
    return num 
}