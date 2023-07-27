import { Input, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";
import { SortOption } from "src/types";

export interface SearchProps {
  searchTerm: string;
  sortOption: SortOption;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectOption: (e: SelectChangeEvent<SortOption>) => void;
}

export const Search: React.FC<SearchProps> = ({
  searchTerm,
  sortOption,
  handleSearch,
  handleSelectOption,
}) => {
  return (
    <div>
      <Input onChange={handleSearch} value={searchTerm} />
      <Select onChange={handleSelectOption} value={sortOption}>
        <MenuItem value={SortOption.NAME}>Name</MenuItem>
        <MenuItem value={SortOption.PRICE}>Price</MenuItem>
      </Select>
    </div>
  );
};
