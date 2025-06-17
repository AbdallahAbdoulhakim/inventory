"use client";

import Header from "@/components/Header";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};

export default function CreateProductModal({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-m";
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Create New Product" />
        <form onSubmit={handleSubmit} className="mt-5 ">
          {/* PRODUCT NAME */}
          <label htmlFor="productName" className={labelCssStyles}>
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="name"
            className={inputCssStyles}
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />

          {/* PRICE */}
          <label htmlFor="productPrice" className={labelCssStyles}>
            Price
          </label>
          <input
            type="number"
            id="productPrice"
            name="price"
            className={inputCssStyles}
            placeholder="Price"
            onChange={handleChange}
            value={formData.price}
          />

          {/* STOCK QUANTITY */}
          <label htmlFor="productStockQuantity" className={labelCssStyles}>
            Stock Quantity
          </label>
          <input
            id="productStockQuantity"
            type="number"
            name="stockQuantity"
            className={inputCssStyles}
            placeholder="Stock Quantity"
            onChange={handleChange}
            value={formData.stockQuantity}
          />

          {/* RATING */}
          <label htmlFor="productRating" className={labelCssStyles}>
            Rating
          </label>
          <input
            id="productRating"
            type="number"
            name="rating"
            className={inputCssStyles}
            placeholder="Rating"
            onChange={handleChange}
            value={formData.rating}
          />

          {/* CREATE ACTIOONS */}
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            type="submit"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-700"
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
