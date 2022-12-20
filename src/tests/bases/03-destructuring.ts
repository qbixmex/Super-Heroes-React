type Props = {
  key: string;
  name: string;
  age: number;
  range: string;
};

export const usContext = ({ key, name, age, range = 'Captain' }: Props) => {
  return {
    keyName: key,
    name,
    age,
    range,
    coordinates: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

export const returnArray = () => {
  return ['ABC', 123];
};
