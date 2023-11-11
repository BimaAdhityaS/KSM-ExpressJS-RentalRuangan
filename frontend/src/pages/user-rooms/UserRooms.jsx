import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterProduct from "../../components/user-rooms-comp/FilterProduct";
import CardProduct from "../../components/user-rooms-comp/CardProduct";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const UserRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(12);

  const getRooms = async () => {
    const res = await axios.get(`http://localhost:5000/admin/roomspagination?search=${keyword}&page=${page}&limit=${limit}`);
    setRooms(res.data.result);
    setPage(res.data.page);
    setTotalPage(res.data.totalPage);
    setRows(res.data.totalRows);
  }

  useEffect(() => {
    getRooms();
  }, [page, keyword])

  const changePage = ({ selected }) => {
    setPage(selected);
  }

  const searchRoom = (e) => {
    e.preventDefault();
    setPage(0);
    setKeyword(query);
  }

  return (
    <>
      <div>
        <div className="container-xl p-10 ">
          <h1 className="text-center font-bold text-2xl md:text-4xl">
            Book your Rooms
          </h1>
          <p className="text-center font-semibold text-lg md:text-xl py-6">
            Choose Your Dream Venue, Rent a Space with Style to Create
            Unforgettable Moments.
          </p>
        </div>
        <div className="bg-slate-50 py-5">
          <div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-evenly -mx-4">

                {/* <div className="w-full lg:w-1/4 p-4">
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
                          type="number"
                          className="p-3 border border-gray-300 w-[50%] rounded focus:outline-none focus:border-gray-500"
                        />
                        <span className="flex justify-center items-center p-3 font-medium">
                          to
                        </span>
                        <input
                          type="number"
                          className="p-3 border w-[50%] border-gray-300 rounded focus:outline-none focus:border-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="w-full lg:w-3/4 p-4 flex justify-center items-center xl:mt-[25px]">
                  <div className="relative w-full">
                    <form class="flex items-center" onSubmit={searchRoom}>
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
                          onChange={(e) => setQuery(e.target.value)}
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
        </div>
        <div className="grid gap-4 place-items-center grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-3 p-5">
          {rooms.map((room) => (
            <div className="flex flex-col w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <Link to={`/rooms/detail/${room.id}`}>
                <img className=" flex-1 rounded-t-lg w-full h-48" src={room.url} alt="room" />
              </Link>
              <div className="flex flex-col justify-between col-span-1 flex-1 px-5 py-5">
                <Link to={`/rooms/detail/${room.id}`}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 max-h-full">
                    {room.name}
                  </h5>
                </Link>
                <div>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <p className="text-justify">
                        {room.alamat.split(' ').slice(0, 5).join(' ')}
                        {room.alamat.split(' ').length > 5 ? '...' : ''}
                      </p>
                    </div>
                    {room.status === "OPEN" ? (
                      <span className="bg-blue-100 text-green-400 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                        OPEN
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-500 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                        CLOSED
                      </span>
                    )}
                  </div>
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-6 h-6 text-red-500"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
                    </svg>
                    <p className="text-red-500 ml-3 font-medium">
                      {room.kapasitas}
                    </p>
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      Rp {room.price.toLocaleString('id-ID')}
                      <span className="text-[15px] font-bold text-green-600">{room.pay_per}</span>
                    </span>

                    <Link
                      to={`https://api.whatsapp.com/send/?phone=${room.kontak_pemilik}&text&type=phone_number&app_absent=0`}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
            <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing
                <span className="font-medium mx-2">{rows}</span>
                results
              </p>
            </div>
            <div>
              <nav className="flex items-center justify-center">
                <ReactPaginate
                  previousLabel={<span className="px-2 py-1 border rounded-md">Previous</span>}
                  nextLabel={<span className="px-2 py-1 border rounded-md">Next</span>}
                  pageCount={totalPage}
                  onPageChange={changePage}
                  containerClassName="flex space-x-2"
                  pageClassName="px-2 border rounded-md"
                  activeClassName="bg-blue-500 text-white"
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRooms;
