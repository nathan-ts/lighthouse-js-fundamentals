const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let length = ingredients.length;
// Write a while loop that prints out the contents of ingredients:
let i = 0; 
while (i < length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = length-1; i >= 0; i--) {
  console.log(ingredients[i]);
}