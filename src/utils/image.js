export const getProductsImage = (url) => {
  return new URL(`../assets/products/${url}`, import.meta.url).href;
};
