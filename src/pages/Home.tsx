import { CategoryView } from "@components/category/CategoryView";
import { getProducts } from "@services/get-products";
import { useFetchData } from "src/hooks/useFetchData";
import { ProductList } from "src/types";

export const Home: React.FC = () => {
  const [products, loadingProducts] = useFetchData<ProductList[]>(getProducts);

  if (loadingProducts) {
    return <p>...Loading</p>;
  }
  return <h1>{products && <CategoryView data={products} />}</h1>;
};
