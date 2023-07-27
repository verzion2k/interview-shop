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
import { Category, CreateProductData } from "src/types";

interface AddNewProductProps {
  categories: Category[];
  onAddProduct: (product: CreateProductData) => void;
}

export const AddNewProduct: React.FC<AddNewProductProps> = ({
  categories,
  onAddProduct,
}) => {
  const [productData, setProductData] = useState<CreateProductData>({
    name: "",
    price: 0,
    parent: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setProductData((prevData) => ({
      ...prevData,
      parent: event.target.value as string,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddProduct(productData);
    setProductData({
      name: "",
      price: 0,
      parent: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
      <Typography variant="h4" mt={2}>
        Create new product
      </Typography>
      <TextField
        label="Product Name"
        name="name"
        value={productData.name}
        onChange={handleInputChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        value={productData.price}
        onChange={handleInputChange}
        fullWidth
        required
        margin="normal"
      />
      <FormControl fullWidth required margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={productData.parent}
          onChange={handleSelectChange}
        >
          {categories.map((category) => {
            return (
              <MenuItem key={category.name} value={category.name}>
                {category.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Add Product
      </Button>
    </form>
  );
};
