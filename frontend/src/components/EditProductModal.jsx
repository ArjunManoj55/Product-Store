import React, { useState } from 'react';

const EditProductModal = ({ isOpen, onClose, product, onUpdate }) => {
  const [name, setName] = useState(product?.name || '');
  const [price, setPrice] = useState(product?.price || '');
  const [image, setImage] = useState(product?.image || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...product, name, price, image });
    onClose(); // Close after update
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-gray-800 text-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Update Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 rounded outline-none focus:ring-2 ring-blue-400"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 rounded outline-none focus:ring-2 ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 rounded outline-none focus:ring-2 ring-blue-400"
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
