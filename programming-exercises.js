'use strict';

// Baseball Teams
// A group of kids wants to play baseball. To select teams, they stand in a circle and recite a
// rhyme. They go around the circle and each kid calls out the next word of the rhyme. The child
// who calls out the last word of the rhyme leaves the circle to join Team 1. This repeats until the
// teams are equal, at which point the remaining kids in the circle form Team 2.
// Write some code to implement this method of selecting teams, given a list (L) of kids’ names
// which represents the order of the children in the circle (assume the length of L is even) and a
// rhyme of length W.

function teams(kids, len) {
    //length of rythme
    var W = len;
    //Array of kids in circle
    var L = kids;
    var teamCount = L.length / 2;
    var teamOne = [];
    while (teamOne.length < teamCount) {
        //if kids names length is less than rhyme length, divide and find the modulus
        if (L.length <= W) {
          var index;
          //if the number of kids can be divided evenly by the number of words in the rythme
            if (W % L.length === 0) {
                index = L.length - 1;
                teamOne.push(L[index]);
                L.splice(index, 1);
            } else {
                index = (W % L.length) - 1;
                teamOne.push(L[index]);
                L.splice(index, 1);
            }
        }
    }
    var teamTwo = L;
    return 'Team One: ' + teamOne + '\nTeam Two: ' + teamTwo;
}

console.log(teams(['Lilly', 'Meli', 'Toby', 'Bailey', 'Cash', 'Lexi'], 25)); //team one is Lilly, Lexi, Meli
console.log(teams(['Lilly', 'Meli', 'Toby', 'Bailey', 'Cash', 'Lexi'], 18)); //team one is Lexi, Toby, Meli
console.log(teams(['Lilly', 'Meli', 'Toby', 'Bailey', 'Cash', 'Lexi'], 6)); //team one is Lexi, Lilly, Toby

//Chocolate Feast
// Little Bob loves chocolate, and he goes to a store with $M in his pocket. The price of each
// chocolate is $C. The store offers a discount: for every X wrappers he gives to the store, he gets
// one chocolate for free. How many chocolates does Bob get to eat?

function feast(cash, price, wrappers) {
    var ChocoBought = cash / price;
    var savedWrappers = 0;
    if (ChocoBought - wrappers === 0) {
        savedWrappers++;
    } else {
        //add the wrappers from chocolate purchased to savedWrappers
        savedWrappers += ChocoBought;
        if (savedWrappers > wrappers) {
            //turn in any saved wrappers for a free chocolate
            savedWrappers -= wrappers;
            //the number of free chocoalates
            savedWrappers += savedWrappers % wrappers;
            //add free chocolates to total
            ChocoBought += savedWrappers - wrappers;
        } else {
            //if he doesn't have enough for a free chocolate, savedWrappers returns to 0
            savedWrappers = 0;
        }
    }
    return savedWrappers + ChocoBought;
}

console.log(feast(10, 2, 5)); //6
console.log(feast(12, 4, 4)); //3
console.log(feast(6, 2, 2)); //5
