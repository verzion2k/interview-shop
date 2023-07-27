import axios from "axios";
import { CreateCategoryData, ProductList } from "src/types";

type CreateCategoryResponse = {
  data: ProductList;
};

export type CreateCategory = (
  category: CreateCategoryData
) => Promise<ProductList>;

const URL = `${process.env.API_BASE_URL}category/add`;

export const createCategory: CreateCategory = async (category) => {
  try {
    const {
      data: { data },
    } = await axios.post<CreateCategoryResponse>(URL, category);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create category.");
  }
};
