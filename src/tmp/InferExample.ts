export const InferExample = () => {
  type ListItem<T extends any[]> = T extends (infer X)[] ? X : never;
  const arr: ListItem<number[]> = [1, 3];

  console.log(arr.valueOf());
};
