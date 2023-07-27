import axios from "axios";

type CreateProductResponse = {
  id: number;
};

export type CreateProductData = {
  name: string;
  price: number;
  parent: string;
};

const URL = `${process.env.API_BASE_URL}product/add`;

export const createProduct = async (
  productData: CreateProductData
): Promise<number> => {
  try {
    const { data } = await axios.post<CreateProductResponse>(URL, productData);
    console.log(data);
    return data.id; // Assuming the API response contains the ID of the newly created product
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create product.");
  }
};
