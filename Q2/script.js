const arr = [5, 5, 5, 5, 5, 5, 6, 26, 5, 2];
const majorityElement = (arr = []) => {
  const map = {};
  const threshold = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (map[value]) {
      map[value]++;
    } else {
      map[value] = 1;
    }
    if (map[value] > threshold) return value;
  }
};

console.log(majorityElement(arr));
