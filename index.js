// code your solution here
function saturdayFun(activity){
    if (activity){
        return `This Saturday, I want to ${activity}!`;
    } else {
        return "This Saturday, I want to roller-skate!"
    }
    
}

function mondayWork(work){
    if (work){
        return `This Monday, I will ${work}.`
    } else {
        return `This Monday, I will go to the office.`
    }
}

/*
function wrapAdjective(fn){
    return `You are ${fn}}!`
}

function innerFn(adjective){
    if (adjective){
        return `${adjective}`
    }
    return "special"
}
    */

function wrapAdjective(flair){
    //returns a function
    //wraps in a visual flair
    //return `${flair}${foo}${flair}`
    function foo(adjective){
        if (adjective){
            return `You are ${flair}${adjective}${flair}!`
        } else {
            return `You are ${flair}special${flair}!`
        }
        //default to "special"
    }
    return foo
}


//wrapAdjective(argument of outer)(argument of inner);