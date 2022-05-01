export const getLegalText = (legalText) => {
  if (legalText && legalText.length >= 1) {
    const children = legalText[0].children;
    if (children && children.length >= 1) {
      const text = children[0].text;
      return text;
    }
  }
  return null;
};
