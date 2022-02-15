function merge(a1, a2) {
  let i = 0;
  let j = 0;
  let merged = [];
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      merged.push(a1[i]);
      i++;
    }
    else {
      merged.push(a2[j]);
      j++;
    }
  }
  while (i < a1.length) {
    merged.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    merged.push(a2[j]);
    j++;
  }
  return merged;
}

// console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
// console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
// console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);