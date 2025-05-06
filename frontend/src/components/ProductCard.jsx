import React, { useState } from 'react';
import { useProductStore } from '../store/product';
import EditProductModal from './EditProductModal';

const ProductCard = ({ product }) => {
  // Destructure actions from the store (e.g., deleteProduct, updateProduct)
  const { deleteProduct, updateProduct, setProducts, products } = useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle deleting a product
  const handleDeleteProduct = async (pid) => {
    try {
      // Attempt to delete the product
      const { success, message } = await deleteProduct(pid);
      
      // If deletion is successful, remove the product from the list to trigger a re-render
      if (success) {
        // Update the products in the store after deletion
        setProducts(products.filter(product => product._id !== pid));
      } else {
        console.error('Delete failed:', message);
      }
    } catch (error) {
      console.error('An error occurred while deleting the product:', error);
    }
  };

  // Handle updating a product
  const handleUpdateProduct = async (pid, updatedData) => {
    try {
      // Attempt to update the product with the new data
      const { success, message } = await updateProduct(pid, updatedData);
      
      // If update is successful, close the modal and optionally update the product list
      if (success) {
        console.log('Product updated:', updatedData);
        setIsModalOpen(false); // Close the modal after successful update
        
        // Optionally: You can update the product list directly if needed
        // This assumes the `updateProduct` method doesn't already update the store
        setProducts(products.map(product => 
          product._id === pid ? { ...product, ...updatedData } : product
        ));
      } else {
        console.error('Update failed:', message);
      }
    } catch (error) {
      console.error('An error occurred while updating the product:', error);
    }
  };

  return (
    <>
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
        {/* Product Image */}
        <img
          src={product.image || 'https://via.placeholder.com/400x250'}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        
        <div className="p-4">
          {/* Product Name */}
          <h3 className="text-lg font-semibold">{product.name}</h3>
          
          {/* Product Price */}
          <p className="text-gray-300 mb-4">${product.price}</p>
          
          <div className="flex gap-2">
            {/* Edit Button */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center"
              onClick={() => setIsModalOpen(true)} // Open modal for editing
            >
              ✏️
            </button>
            
            {/* Delete Button */}
            <button
              className="bg-pink-400 hover:bg-pink-500 text-white px-3 py-1 rounded flex items-center"
              onClick={() => handleDeleteProduct(product._id)} // Call delete function
            >
              🗑️
            </button>
          </div>
        </div>
      </div>

      {/* Conditional Edit Modal */}
      <EditProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal
        product={product}
        onUpdate={(updatedData) => handleUpdateProduct(product._id, updatedData)} // Handle the update
      />
    </>
  );
};

export default ProductCard;
