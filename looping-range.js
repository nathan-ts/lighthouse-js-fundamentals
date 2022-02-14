function range(start,end,step) {
  if (!Number.isInteger(start) || !Number.isInteger(end) || !Number.isInteger(step)) {
    return [];
  }
  else if (start > end) {
    return [];
  }
  else if (step <= 0) {
    return [];
  }
  let result = [];
  for (let i = start; i <= end; i = i + step) {
    result.push(i);
  }
  return result;
}