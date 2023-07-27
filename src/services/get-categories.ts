import axios from "axios";
import { Category } from "src/types";

type GetCategoriesResponse = { data: Category[] };

export type GetCategories = () => Promise<Category[]>;

const URL = `${process.env.API_BASE_URL}categories`;

export const getCategories: GetCategories = async () => {
  try {
    const {
      data: { data },
    } = await axios.get<GetCategoriesResponse>(URL);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch categories.");
  }
};
