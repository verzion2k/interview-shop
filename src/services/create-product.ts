import axios from "axios";
import { CreateProductData, Product } from "src/types";

export type CreateProductResponse = {
  data: Product;
};

export type CreateProduct = (product: CreateProductData) => Promise<Product>;

const URL = `${process.env.API_BASE_URL}product/add`;

export const createProduct: CreateProduct = async (product) => {
  try {
    const {
      data: { data },
    } = await axios.post<CreateProductResponse>(URL, product);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create product.");
  }
};
