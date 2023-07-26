import axios from "axios";
import { ProductList } from "src/types";

type GetProductsResponse = { data: ProductList[] };

const URL = `${process.env.API_BASE_URL}products`;

export const getProducts = async (): Promise<ProductList[]> => {
  try {
    const {
      data: { data },
    } = await axios.get<GetProductsResponse>(URL);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products.");
  }
};
