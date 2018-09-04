function uniteUnique(arr) {
  const args = [].concat(...arguments);
  return [...new Set(args)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);