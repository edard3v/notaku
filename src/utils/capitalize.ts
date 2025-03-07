export const capitalize = (txt: string) => {
  let result = "";

  for (let i = 0; i < txt.length; i++) {
    const element = txt[i];

    if (i == 0) result += element.toUpperCase();
    else result += element;
  }

  return result;
};
