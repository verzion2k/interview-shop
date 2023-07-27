import { Category } from "src/types";

export type FindCategoryParentPath = (categoryName: string) => string;

export type UseFindCategoryPath = (
  categories: Category[]
) => [FindCategoryParentPath];

export const useFindCategoryPath: UseFindCategoryPath = (categories) => {
  const findCategoryParentPath = (categoryName: string): string => {
    if (!categories) {
      return "";
    }

    const category = categories.find((c) => c.name === categoryName);

    if (!category) {
      return "Category not found";
    }

    if (!category.parent) {
      return "";
    }

    const parentCategory = categories.find((c) => c.name === category.parent);
    if (!parentCategory) {
      return category.parent;
    }

    const parentPath = findCategoryParentPath(category.parent);
    return parentPath ? `${parentPath}/${category.parent}` : category.parent;
  };

  return [findCategoryParentPath];
};
