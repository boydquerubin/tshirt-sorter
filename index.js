function tshirtSorter(str) {
  let counts = { s: 0, m: 0, l: 0 };
  for (let char of str) {
    counts[char]++;
  }
  return (
    "s".repeat(counts["s"]) + "m".repeat(counts["m"]) + "l".repeat(counts["l"])
  );
}

console.log(tshirtSorter("lms"));
console.log(tshirtSorter("smllms"));
