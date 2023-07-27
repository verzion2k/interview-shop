import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { Category, CreateCategoryData } from "src/types";

interface AddNewCategoryProps {
  categories: Category[];
  onAddCategory: (category: CreateCategoryData) => void;
}

export const AddNewCategory: React.FC<AddNewCategoryProps> = ({
  categories,
  onAddCategory,
}) => {
  const [categoryData, setCategoryData] = useState<CreateCategoryData>({
    name: "",
    parent: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setCategoryData((prevData) => ({
      ...prevData,
      parent: event.target.value as string,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddCategory(categoryData);
    setCategoryData({
      name: "",
      parent: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
      <Typography variant="h4" mt={2}>
        Create new category
      </Typography>
      <TextField
        label="Category Name"
        name="name"
        value={categoryData.name}
        onChange={handleInputChange}
        fullWidth
        required
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Parent category</InputLabel>
        <Select
          name="parent"
          defaultValue=""
          value={categoryData.parent}
          onChange={handleSelectChange}
        >
          {categories?.map((category) => {
            return (
              <MenuItem key={category.name} value={category.name}>
                {category.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Add Category
      </Button>
    </form>
  );
};
