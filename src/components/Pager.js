import { useContext } from 'react';

import ReactPaginate from "react-paginate";
import AnimalsContext from '../context/animals';

function Pager() {
    const {SearchImages, term} = useContext(AnimalsContext);

    const handlePageClick = (event) => {
        SearchImages(term, event.selected + 1);
    };

    return <div className="flex justify-center mt-8 mb-2">
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={100}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"}
            containerClassName={"pagination leading-tight isolate inline-flex -space-x-px rounded-md shadow-sm"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"}
            activeClassName={"active"}
            activeLinkClassName={"relative z-10 inline-flex items-center bg-gray-light px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-light-600"}
            marginPagesDisplayed={2}
        />
    </div>
}

export default Pager;