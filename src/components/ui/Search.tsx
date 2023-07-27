import {
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  TextField,
} from "@mui/material";
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
    <Box>
      <TextField
        variant="outlined"
        label="Search for products"
        onChange={handleSearch}
        value={searchTerm}
        sx={{ marginRight: "5px" }}
      />
      <Select onChange={handleSelectOption} value={sortOption}>
        <MenuItem value={SortOption.NAME}>Name</MenuItem>
        <MenuItem value={SortOption.PRICE}>Price</MenuItem>
      </Select>
    </Box>
  );
};
