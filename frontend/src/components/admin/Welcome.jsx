import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, Link } from 'react-router-dom'

const Welcome = () => {
    const [rooms, setrooms] = useState([])

    const getRooms = async () => {
        const response = await axios.get('http://localhost:5000/admin/rooms')
        setrooms(response.data)
    }

    useEffect(() => {
        getRooms()
    }, [])

    const closedRoomCount = rooms.filter(room => room.status === 'CLOSED').length;
    const openRoomCount = rooms.filter(room => room.status === 'OPEN').length;

    return (
        <div>
            <div className='my-10'>
                <h1 className='text-center text-5xl font-bold'>Halaman Dashboard</h1>
                <h2 className='text-center text-2xl font-medium text-gray-500'>Selamat Datang Bima A S</h2>
            </div>

            <div className='w-full bg-slate-900 px-4 py-4 rounded-lg border-white border-4'>
                <p className='font-medium text-2xl text-center text-gray-400'>STATUS</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
                    <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></g></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">{rooms.length}</p>
                            <p>Ruangan</p>
                        </div>
                    </div>
                    <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">XX</p>
                            <p>Pengunjung</p>
                        </div>
                    </div>
                    <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">

                            </svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">{closedRoomCount}</p>
                            <p> Ruangan Ditutup</p>
                        </div>
                    </div>
                    <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">

                            </svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">{openRoomCount}</p>
                            <p>Ruangan Dibuka</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome