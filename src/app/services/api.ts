const endpoint = "https://dummyjson.com";

export const getProducts = async () => {
  try {
    const res = await fetch(`${endpoint}/products`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductCategories = async () => {
  try {
    const res = await fetch(`${endpoint}/products/categories`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async (categories: string) => {
  try {
    const res = await fetch(`${endpoint}/products/category/${categories}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchProducts = async (query: string) => {
  try {
    const res = await fetch(`${endpoint}/products/search?q=${query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProducts = async (id: string | number) => {
  try {
    const res = await fetch(`${endpoint}/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
