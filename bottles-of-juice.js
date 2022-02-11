let num = 99;

while (num >= 1) {
    let counter = "";
    if (num === 1) {
        counter = " bottle"
    }
    else {
        counter = " bottles"
    }
    let counterless = "";
    if (num-1 === 1) {
        counterless = " bottle"
    }
    else {
        counterless = " bottles"
    }
    let next = num - 1;
    let output = "" + num + counter + " of juice on the wall! " + num + counter + " of juice! Take one down, pass it around... " + next + counterless + " of juice on the wall!";
    console.log(output);
    num = num - 1;
}