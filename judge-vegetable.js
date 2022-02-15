const judgeVegetable = function (vegetables, metric) {
  let max = 0;
  let big = "";
  let i = 0;
  for (let veggie of vegetables) {
    if (veggie[metric] > max) {
      max = veggie[metric];
      big = veggie.submitter;
    }
    i++;
  }
  return big;
}
