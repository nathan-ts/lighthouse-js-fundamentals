function loopyLighthouse(range, multiples, words){
  for (let i = range[0]; i <= range[1]; i++) {
    let output = "";
    if (i % multiples[0] === 0) {
      output += words[0];
    }
    if (i % multiples[1] === 0) {
      output += words[1];
    }
    if (!output) {
      console.log(i);
    }
    else {
      console.log(output);
    }
  }
}

