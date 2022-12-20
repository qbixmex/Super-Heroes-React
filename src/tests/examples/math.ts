export const add = (num1: number, num2: number) => {
  return num1 + num2;
};

export const addString = (num1: string, num2: string) => {
  const a = Number(num1);
  const b = Number(num2);
  const result = a + b;
  return String(result);
};

export const reduction = (num1: number, num2: number) => {
  return num1 - num2;
};

export const multiply = (num1: number, num2: number) => {
  return num1 * num2;
};

export const division = (num1: number, num2: number) => {
  return num1 / num2;
};
