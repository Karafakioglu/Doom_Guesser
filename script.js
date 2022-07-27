const year = [2031, 2056, 2085, 2452, 2752, 2921, 3001]

const possibleScenarios = ["First alien contact", "A new type of virus emerges", "Warp-drive has been found"]

const place = ["London", "Istanbul", "Paris"]

var finalMessage = []

// Instead of creating a random number generator for each array, this function does it in one single action
function randomNumberGenerator(array) {
    return Math.floor(Math.random() * array.length)
}

// This function pushes all the randomly selected events into our finalMessage array
function addAction() {
    finalMessage.push("In the year of " + year[randomNumberGenerator(year)])
    finalMessage.push("The magnificent event of " + possibleScenarios[randomNumberGenerator(possibleScenarios)])
    finalMessage.push("In " + place[randomNumberGenerator(place)])
}


addAction()

// Joining message as to form a string
finalMessage = finalMessage.join(" ")

console.log(finalMessage);
