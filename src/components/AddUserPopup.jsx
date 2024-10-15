import { useState } from "react";

const AddUserPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    userId: "",
    productId: "",
    name: "",
    price: "",
    category: "",
  });

  // Toggle popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  // Add new product to the table
  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ userId: "", productId: "", name: "", price: "", category: "" });
    togglePopup();
  };

  return (
    <div className="p-0">
  
      {/* Add User Button */}
      <button onClick={togglePopup} className="bg-blue-500 px-2 rounded">
        Add User
      </button>

      {/* Popup for Adding User */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-3 rounded">
            <h2 className="text-lg font-bold mb-4">Add New User</h2>

            {/* Input fields */}
            <input
              type="text"
              name="userId"
              value={newProduct.userId}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4 placeholder:text-gray-500 text-black"
              placeholder="Enter User ID"
              
            />
            <input
              type="text"
              name="productId"
              value={newProduct.productId}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4 placeholder:text-gray-500 text-black"
              placeholder="Enter Product ID"
            />
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4  placeholder:text-gray-500 text-black"
              placeholder="Enter Name"
            />
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4  placeholder:text-gray-500 text-black"
              placeholder="Enter Price"
            />
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4 placeholder:text-gray-500 text-black"
              placeholder="Enter Category"
            />

            {/* Add and Close buttons */}
            <div className="flex justify-between">
              <button
                onClick={handleAddProduct}
                className="bg-green-500 px-4 py-2 rounded text-white "
              >
                Add
              </button>
              <button
                onClick={togglePopup}
                className="bg-red-500 px-4 py-2 rounded text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUserPopup;
