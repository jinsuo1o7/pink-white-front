import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link, useLocation } from "react-router-dom";

export default function Pagination({
  page: { totalPages, totalElements, number, size },
}) {
  const location = useLocation();
  const curPage = new URLSearchParams(location.search).get("page") || 0;

  const getPageLink = (pageNumber) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", pageNumber.toString());

    return `${location.pathname}?${searchParams.toString()}`;
  };

  const handlePageClick = () => {
    window.scrollTo(0, 0);
  };

  const pageLinks = [];

  let startPage = Math.max(0, number - 4);
  let endPage = Math.min(totalPages - 1, number + 5);
  if (endPage - startPage < 9) {
    if (startPage === 0) {
      endPage = Math.min(totalPages - 1, startPage + 9);
    } else {
      startPage = Math.max(0, endPage - 9);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageNumber = i;
    const linkClassName =
      pageNumber === number
        ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0";
    const link = (
      <Link
        key={i}
        to={getPageLink(pageNumber)}
        onClick={() => handlePageClick()}
        className={linkClassName}
      >
        {pageNumber}
      </Link>
    );
    pageLinks.push(link);
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{number}</span> to{" "}
            <span className="font-medium">{totalPages - 1}</span> of{" "}
            <span className="font-medium">{totalElements}</span> results
          </p>
        </div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <Link
            to={curPage <= 0 ? getPageLink(0) : getPageLink(+curPage - 1)}
            onClick={() => handlePageClick()}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          {pageLinks}
          <Link
            to={
              curPage >= totalPages - 1
                ? getPageLink(totalPages - 1)
                : getPageLink(+curPage + 1)
            }
            onClick={() => handlePageClick()}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
