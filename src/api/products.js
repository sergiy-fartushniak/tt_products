const BASE_URL = 'https://sergiy-fartushniak.github.io/virna/api/products.json';

export const getProducts = async() => {
  const resolve = await fetch(BASE_URL);
  const productData = await resolve.json();
  const products = await productData.products;

  return products;
};

export const getComments = async(id) => {
  const resolve = await fetch(BASE_URL);
  const commentsData = await resolve.json();
  const comments = await commentsData.comments;

  return comments.filter(comment => comment.productId === id);
};
