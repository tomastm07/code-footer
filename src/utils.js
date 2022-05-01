export const getLegalText = (legalText) => {
  if (legalText && legalText.length >= 1) {
    const children = legalText?.map((item) => item.children);

    if (children && children.length >= 1) {
      const text = children.map((child) => child[0].text);
      return text;
    }
  }
  return [];
};
