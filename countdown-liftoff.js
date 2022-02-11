/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here
let sec  = 60;

while (sec >= 0) {
    let task = "";
    switch (sec) {
        case 50:
            task = "Orbiter transfers from ground to internal power";
            break;
        case 31:
            task = "Ground launch sequencer is go for auto sequence start";
            break;
        case 16:
            task = "Activate launch pad sound suppression system";
            break;
        case 10:
            task = "Activate main engine hydrogen burnoff system";
            break;
        case 6:
            task = "Main engine start";
            break;
        case 0:
            task = "Solid rocket booster ignition and liftoff!";
            break;
        default:
            task = "T-" + sec + " seconds";
    }
    console.log(task);
    sec--;
}
