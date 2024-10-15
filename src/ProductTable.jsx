// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./pagianation/Pagination";
import AddUserPopup from "./components/AddUserPopup";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setProducts(result.data);
    };
    fetchData();
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();
    // Check if the query matches title, id or price
    return (
      product.title.toLowerCase().includes(query) || // Search by title
      product.id.toString().includes(query) || // Search by product ID (number)
      product.price.toString().includes(query) ||
      product.category.name.toLowerCase().includes(query)
    );
  });

  const displayProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );


  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };


  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };




  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <input
          type="text"
          placeholder="Search by name, id or category"
          className="border p-2 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="bg-blue-500 text-white px-4 py-2 rounded">
         <AddUserPopup  onAddProduct={addProduct}/>
        </div>
       
      </div>
      <table className="min-w-full bg-white">
        <thead className="">
          <tr className="border bg-slate-200 border-gray-500">
            <th className="text-center py-2">User ID</th>
            <th className="text-center py-2">Product ID</th>
            <th className="text-center py-2">Name</th>
            <th className="text-center py-2">Price</th>
            <th className="text-center py-2">Category</th>
            <th className="text-center py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayProducts.map((product) => (
            <tr key={product.id} className="border">
              <td className="text-center py-2">{product.id}</td>
              <td className="text-center py-2">{product.category?.id}</td>
              <td className="text-center py-2">{product.title}</td>
              <td className="text-center py-2">${product.price}</td>
              <td className="text-center py-2">{product.category?.name}</td>
              <td className="text-center py-2">
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded mr-2 "
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
                <button className="bg-green-500 text-white px-4 py-1 rounded">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center my-6">
        <Pagination
          pageCount={Math.ceil(products.length / itemsPerPage)}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};

export default ProductTable;
