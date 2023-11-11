import React from "react";

const FilterProduct = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-evenly -mx-4">
            <div className="w-full lg:w-1/4 px-4 flex items-center justify-center">
              <div className="relative w-full">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Filter Category
                </label>
                <select
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Sort By</option>
                  <option>Price</option>
                  <option>Rating</option>
                  <option>Popularity</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-[28px] text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.586 7.586a2 2 0 0 1 2.828 0L10 8.828l.586-.586a2 2 0 0 1 2.828 2.828L10 14.828l-3.414-3.414a2 2 0 0 1 0-2.828Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 p-4">
              <div className="relative">
                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Price
                  </label>
                  <div className="flex gap-3 text-[16px] font-normal">
                    <input
                      type="text"
                      className="p-3 border border-gray-300 w-[50%] rounded focus:outline-none focus:border-gray-500"
                    />
                    <span className="flex justify-center items-center p-3 font-medium">
                      to
                    </span>
                    <input
                      type="text"
                      className="p-3 border w-[50%] border-gray-300 rounded focus:outline-none focus:border-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 p-4 flex justify-center items-center xl:mt-[25px]">
              <div className="relative w-full">
                <form class="flex items-center">
                  <label for="search" class="sr-only">
                    Search
                  </label>
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 21"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="search"
                      class="border border-gray-300 text-gray-900 text-[16px] font-normal rounded focus:outline-none focus:border-gray-500 block w-full ps-10 p-3 "
                      placeholder="Search..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="inline-flex items-center py-3.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    <svg
                      class="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default FilterProduct;
