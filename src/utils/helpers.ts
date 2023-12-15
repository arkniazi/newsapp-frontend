export const makeOptions = (array: any[] | undefined) => {
  return array?.map((item) => {
    return { label: item.name, value: item.id };
  });
};

export const makeLabelOptions = (array: any[] | undefined) => {
  return array?.map((item) => {
    return { label: item, value: item };
  });
};
