import { CategoryView } from "@components/category/CategoryView";
import { ProductView } from "@components/product/ProductView";
import { Loading } from "@components/ui/Loading";
import { Search } from "@components/ui/Search";
import { SelectChangeEvent, Button, Stack } from "@mui/material";
import { getCategories } from "@services/get-categories";
import { getProducts } from "@services/get-products";
import { ChangeEvent, useCallback, useState } from "react";
import { useFetchData } from "src/hooks/useFetchData";
import { useFilterProducts } from "src/hooks/useFilterProducts";
import { useFindCategoryPath } from "src/hooks/useFindCategoryPath";
import { useFindProductPath } from "src/hooks/useFindProductPath";
import { Category, ProductList, SortOption } from "src/types";

export const Home: React.FC = () => {
  const [products, productsLoading] = useFetchData<ProductList[]>(getProducts);
  const [categories, categoriesLoading] =
    useFetchData<Category[]>(getCategories);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.NAME);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const filteredProducts = useFilterProducts(products, sortOption, searchTerm);
  const [findProductParentPath] = useFindProductPath(products ?? []);
  const [findCategoryParentPath] = useFindCategoryPath(categories ?? []);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsSearching(true);
  }, []);

  const handleSelectOption = useCallback((e: SelectChangeEvent<SortOption>) => {
    setSortOption(e.target.value as SortOption);
  }, []);

  const handleBackButton = useCallback(() => {
    setIsSearching(false);
  }, []);

  if (!products || !categories) {
    return;
  }

  return (
    <>
      <Stack direction="row" spacing={2} mt={2}>
        <Search
          searchTerm={searchTerm}
          sortOption={sortOption}
          handleSearch={handleSearch}
          handleSelectOption={handleSelectOption}
        />
        <Button variant="contained" onClick={handleBackButton}>
          Back to Category View
        </Button>
      </Stack>

      {productsLoading || categoriesLoading ? (
        <Loading />
      ) : !isSearching || !searchTerm ? (
        <CategoryView
          products={products}
          findCategoryParentPath={findCategoryParentPath}
          findProductParentPath={findProductParentPath}
        />
      ) : (
        <ProductView
          products={filteredProducts}
          findProductParentPath={findProductParentPath}
        />
      )}
    </>
  );
};
