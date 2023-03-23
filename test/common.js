export function createRandomArray(len = 10, max = 100, min = 0) {
  const data = [];
  for (let i = 0; i < len; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
}
