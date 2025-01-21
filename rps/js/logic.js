const rock = "rock"
const paper = "paper"
const scrissors = "scissors"

function getRPick() {
    //Math.random is going to return random number between 0.00 and 1.00
    let chance = Math.random();

    // If else statements to determine when to return what const.
    // Because "chance" is set to randomize between 0 and 1 as it is equivalent to math.random, when chance is between .66 and 1, it will return rock but between .66 and .33 it will return paper, and so forth.
    if (chance > 0.66) {
        return rock;
    } else if (chance > 0.33) {
        return paper;
    } else {
        return scissors;
    }
}