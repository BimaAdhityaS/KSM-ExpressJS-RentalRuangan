import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Gallery from "./Gallery";
import BackButton from "../../img/back-button.png";


const DetailComp = () => {
  const { id } = useParams()
  const [rooms, setrooms] = useState([])

  const getRooms = async () => {
    const response = await axios.get(`http://localhost:5000/admin/rooms/${id}`)
    setrooms(response.data)
  }

  function formatPrice(price) {
    if (typeof price === 'number') {
      return `Rp ${price.toLocaleString('id-ID')}`;
    }
    return price;
  }

  const formattedPrice = formatPrice(rooms.price);

  useEffect(() => {
    getRooms()
  }, [])

  return (
    <>
      <div>
        <Link to={`/rooms/`}>
          <span className="absolute flex justify-center items-center text-md md:text-md md:ml-4 p-1 md:p-4 md:mt-1 lg:p-6 lg:text-md xl:text-lg xl:mt-2 ml-0 mt-4  font-medium">
            <img className="w-[30px] mr-2" src={BackButton} alt="button-back" />{" "}
            Back
          </span>
        </Link>
        <h1 className="text-center font-bold text-lg md:text-2xl lg:text-4xl xl:text-5xl  py-5">
          Detail Room Information
        </h1>
        <hr className="w-full border-0.5 h-0.5 bg-gray-200 mt-2" />
        <div className="w-full p-5">
          <section className="text-gray-700 body-font overflow-hidden bg-white w-full mx-auto border border-gray-300 rounded shadow-md">
            <div className="container px-5 py-4 mx-auto">
              <div className="flex justify-center items-center">
                <img
                  className="h-auto w-1/3 rounded-lg"
                  src={rooms.url}
                  alt="image_Banner"
                />
              </div>
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <hr className="w-full border-0.5 h-0.5 bg-gray-200 mt-10" />
                <div className="lg:w-full w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {rooms.name}
                  </h2>
                  <h2 className="text-gray-900 text-2xl title-font font-medium mb-1">
                    {rooms.name}
                  </h2>
                  <div className="flex mb-4">
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
                        {rooms.kapasitas}
                      </p>
                    </span>
                    {rooms.status === "OPEN" ? (
                      <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 font-medium text-green-500">
                        OPEN
                      </span>
                    ) : (
                      <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 font-medium text-red-500">
                        CLOSED
                      </span>
                    )}
                  </div>
                  <p className="leading-relaxed">{rooms.deskripsi}</p>
                  <p className="mt-4">
                    <span className="font-medium text-black">
                      Kontak Pemilik :{" "}
                    </span>
                    {rooms.kontak_pemilik}
                  </p>
                  <p className="mt-4">
                    <span className="font-medium text-black">Alamat : </span>
                    {rooms.alamat}
                  </p>
                  {rooms.lokasi_url && (
                    <a href={rooms.lokasi_url}>
                      <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 100 100" className='mt-4'>
                          <path fill="#70b570" d="M75.93,25.02C77.9,28.93,79,33.33,79,38c0,21-22,32-26,50c-0.36,1.62-1.34,3-3,3s-2.64-1.38-3-3	c-1.43-6.44-5.17-11.99-9.37-17.41l21.24-25.27L75.93,25.02z"></path><path fill="#40a6dd" d="M75.93,25.02l-17.06,20.3L58.49,45c1.57-1.9,2.51-4.34,2.51-7c0-6.08-4.92-11-11-11	c-3.42,0-6.47,1.56-8.49,4l-0.38-0.32l0.21-0.24l16.99-20.23C66.04,12.52,72.39,17.94,75.93,25.02z"></path><path fill="#ead032" d="M58.87,45.32L37.63,70.59c-4.86-6.26-10.34-12.37-13.64-19.51l17.14-20.4L41.51,31	C39.94,32.9,39,35.34,39,38c0,6.08,4.92,11,11,11c3.42,0,6.47-1.56,8.49-4L58.87,45.32z"></path><path fill="#3a83c1" d="M58.33,10.21L41.34,30.44L27.95,19.19l-0.01-0.01C33.25,12.95,41.16,9,50,9	C52.89,9,55.69,9.42,58.33,10.21z"></path><path fill="#e85654" d="M41.34,30.44l-0.21,0.24l-17.14,20.4C22.16,47.11,21,42.82,21,38c0-7.18,2.61-13.75,6.94-18.82	l0.01,0.01L41.34,30.44z"></path><path fill="#1f212b" d="M50,92c-1.934,0-3.457-1.449-3.977-3.783c-1.411-6.359-5.248-11.936-9.184-17.015	c-0.956-1.231-1.938-2.457-2.92-3.687C29.919,62.513,25.782,57.34,23.082,51.5C21.008,47,20,42.585,20,38	c0-7.133,2.55-14.048,7.18-19.469l0,0C32.884,11.839,41.201,8,50,8c2.942,0,5.841,0.421,8.617,1.252	c7.883,2.361,14.519,7.945,18.207,15.32C78.931,28.753,80,33.271,80,38c0,12.104-7.057,20.932-13.881,29.468	c-5.365,6.711-10.432,13.05-12.143,20.749C53.457,90.551,51.934,92,50,92z M50,10c-8.212,0-15.975,3.582-21.299,9.828v0.001	C24.38,24.889,22,31.342,22,38c0,4.289,0.948,8.431,2.898,12.661c2.597,5.619,6.657,10.696,10.583,15.605	c0.989,1.236,1.976,2.471,2.938,3.71c4.079,5.264,8.06,11.063,9.557,17.807C48.124,88.449,48.618,90,50,90s1.876-1.551,2.023-2.217	c1.812-8.152,7.263-14.97,12.533-21.563C71.166,57.952,78,49.403,78,38c0-4.413-0.997-8.629-2.963-12.53	c-3.444-6.887-9.638-12.098-16.994-14.302C55.454,10.393,52.748,10,50,10z"></path><rect width="53.382" height="1" x="14.469" y="30.145" fill="#1f212b" transform="rotate(-49.993 41.159 30.644)"></rect><polygon fill="#1f212b" points="38.013,70.911 37.247,70.269 75.547,24.698 76.276,25.38"></polygon><path fill="#1f212b" d="M50,50c-6.617,0-12-5.383-12-12c0-2.786,0.973-5.498,2.738-7.637l0.001-0.001	C43.035,27.59,46.41,26,50,26c6.617,0,12,5.383,12,12c0,2.786-0.973,5.498-2.738,7.637C56.965,48.41,53.59,50,50,50z M42.28,31.638	C40.81,33.418,40,35.678,40,38c0,5.514,4.486,10,10,10c2.992,0,5.806-1.326,7.72-3.638C59.19,42.582,60,40.322,60,38	c0-5.514-4.486-10-10-10C47.008,28,44.194,29.326,42.28,31.638z"></path><rect width="1" height="17.488" x="34.145" y="16.071" fill="#1f212b" transform="rotate(-49.962 34.646 24.816)"></rect><path fill="#1f212b" d="M73.884,44c-0.036,0-0.073-0.004-0.11-0.013c-0.27-0.061-0.438-0.328-0.377-0.598	c0.354-1.568,0.551-3.217,0.585-4.899c0.006-0.276,0.209-0.468,0.51-0.49c0.276,0.006,0.496,0.234,0.49,0.51	c-0.036,1.751-0.241,3.467-0.61,5.101C74.319,43.843,74.112,44,73.884,44z"></path><path fill="#1f212b" d="M74.338,35.956c-0.247,0-0.453-0.151-0.479-0.404l-0.01-0.089c-0.044-0.433-0.089-0.865-0.157-1.29	c-0.045-0.272,0.141-0.529,0.413-0.573c0.269-0.049,0.529,0.14,0.573,0.413c0.072,0.444,0.119,0.896,0.166,1.347	c0.028,0.275-0.167,0.565-0.441,0.594C74.381,35.955,74.359,35.956,74.338,35.956z"></path><path fill="#1f212b" d="M56.095,72c-0.101,0-0.202-0.03-0.29-0.093c-0.225-0.16-0.277-0.472-0.117-0.697	c1.798-2.527,3.743-4.984,5.745-7.488c4.109-5.141,7.991-9.996,10.34-15.42c0.109-0.255,0.403-0.373,0.657-0.261	c0.254,0.11,0.37,0.404,0.261,0.657c-2.402,5.547-6.324,10.454-10.477,15.648c-1.992,2.492-3.929,4.937-5.712,7.443	C56.404,71.927,56.251,72,56.095,72z"></path>
                        </svg>
                        <span className=' ml-2 my-4'> {rooms.lokasi_url}</span>
                      </div>
                    </a>
                  )}
                  <hr className="w-full border-0.5 h-0.5 bg-gray-200 mt-4" />
                  <div className="flex mt-6">
                    <span className="title-font font-medium text-xl sm:text-[25px] text-gray-900">
                      {formattedPrice}
                      <span class="text-[15px] font-bold text-green-600">
                        {rooms.pay_per}
                      </span>
                    </span>

                    <Link
                      to={`https://wa.me/${rooms.kontak_pemilik}`} className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                      Contact The Owner
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DetailComp;
