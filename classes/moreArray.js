function transformToObjects(numberArray) {
  // Todo: Add your logic
  const num = numberArray.map((num) => {
    return { val: num };
  });
  return num;
}
console.log(transformToObjects([1, 2, 3]));
