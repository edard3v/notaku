const utils_dom = () => {
  return {
    select,
  };
};

const select = (id: string) => {
  const element = document.querySelector(`#${id}`);
  if (!element) return null;
  return element as HTMLElement;
};

export const dom = utils_dom();
