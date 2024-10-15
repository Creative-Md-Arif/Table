import ReactPaginate from 'react-paginate';

// eslint-disable-next-line react/prop-types
const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <div className="flex justify-center my-6">
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex space-x-2"
        pageLinkClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-indigo-500 hover:text-white transition-transform transform hover:scale-105"
        activeLinkClassName="bg-indigo-500 text-white"
        previousLinkClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-indigo-500 hover:text-white transition-transform transform hover:scale-105"
        nextLinkClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-indigo-500 hover:text-white transition-transform transform hover:scale-105"
        disabledLinkClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
};

export default Pagination;