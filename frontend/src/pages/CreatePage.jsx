import React, { useState } from "react";
import { useProductStore } from "../store/product"; // adjust path as needed

const CreatePage = () => {
  const [newProduct, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const createProduct = useProductStore((state) => state.createProduct);

  const handleAddProduct = async () => {
    const response = await createProduct(newProduct);
    alert(response.message);
    if (response.success) {
      setProduct({ name: "", price: "", image: "" }); 
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-center mb-8">Create Product</h1>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* Product Name */}
        <div className="mb-6">
          <label htmlFor="product-name" className="block mb-2 text-sm font-medium text-black">
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            value={newProduct.name}
            onChange={(e) => setProduct((prev) => ({ ...prev, name: e.target.value }))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-black">
            Price
          </label>
          <input
            type="text"
            id="price"
            value={newProduct.price}
            onChange={(e) => setProduct((prev) => ({ ...prev, price: e.target.value }))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        {/* Image URL */}
        <div className="mb-6">
          <label htmlFor="image-url" className="block mb-2 text-sm font-medium text-black">
            Image URL
          </label>
          <input
            type="text"
            id="image-url"
            value={newProduct.image}
            onChange={(e) => setProduct((prev) => ({ ...prev, image: e.target.value }))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
