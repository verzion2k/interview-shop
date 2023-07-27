import { CategoryView } from "@components/category/CategoryView";
import { ProductView } from "@components/product/ProductView";
import { Loading } from "@components/ui/Loading";
import { Search } from "@components/ui/Search";
import { SelectChangeEvent, Button, Stack } from "@mui/material";
import { getProducts } from "@services/get-products";
import { ChangeEvent, useCallback, useState } from "react";
import { useFetchData } from "src/hooks/useFetchData";
import { useFilterProducts } from "src/hooks/useFilterProducts";
import { ProductList, SortOption } from "src/types";

export const Home: React.FC = () => {
  const [products, loading] = useFetchData<ProductList[]>(getProducts);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.NAME);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const filteredProducts = useFilterProducts(products, sortOption, searchTerm);

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

  if (!products) {
    return;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Stack direction="row">
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

      {!isSearching || !searchTerm ? (
        <CategoryView products={products} />
      ) : (
        <ProductView products={filteredProducts} />
      )}
    </>
  );
};
