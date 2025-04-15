// code your solution here
function saturdayFun(activity = "roller-skate"){
   return (`This Saturday, I want to ${activity}!`)   
}

function mondayWork(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(symbol = "*"){
    return function(adjective = "a hard worker"){
         return (`You are ${symbol}${adjective}${symbol}!`)
    }
       

}

function wrapAdjective (decor = "||"){
    return function(adjective = "a dedicated programmer"){
        return (`You are ${decor}${adjective}${decor}!`)
    }
}

