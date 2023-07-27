import { AddNewCategory } from "@components/admin/AddNewCategory";
import { AddNewProduct } from "@components/admin/AddNewProduct";
import { Loading } from "@components/ui/Loading";
import { Box } from "@mui/material";
import { createCategory } from "@services/create-category";
import { createProduct } from "@services/create-product";
import { getCategories } from "@services/get-categories";
import { useFetchData } from "src/hooks/useFetchData";
import { Category, CreateCategoryData, CreateProductData } from "src/types";

export const Admin: React.FC = () => {
  const [categories, loading] = useFetchData<Category[]>(getCategories);

  const handleAddProduct = async (
    newProduct: CreateProductData
  ): Promise<void> => {
    const { name } = await createProduct(newProduct);
    alert(`${name} product is successfully added!`);
  };

  const handleAddCategory = async (
    newCategory: CreateCategoryData
  ): Promise<void> => {
    const { name } = await createCategory(newCategory);
    alert(`${name} category is successfully added!`);
  };

  if (!categories) {
    return "";
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Box>
      <AddNewCategory
        onAddCategory={handleAddCategory}
        categories={categories}
      />
      <AddNewProduct onAddProduct={handleAddProduct} categories={categories} />
    </Box>
  );
};
