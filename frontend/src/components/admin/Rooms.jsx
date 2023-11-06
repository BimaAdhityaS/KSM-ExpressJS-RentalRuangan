import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, Link } from 'react-router-dom'

const Rooms = () => {
    const [rooms, setrooms] = useState([])

    const getRooms = async () => {
        const response = await axios.get('http://localhost:5000/admin/rooms')
        setrooms(response.data)
    }

    const deleteRoom = async (id) => {
        await axios.delete(`http://localhost:5000/admin/rooms/${id}`)
        getRooms()
    }

    const changeStatus = async (id) => {
        const room_data = await axios.get(`http://localhost:5000/admin/rooms/${id}`)

        const currentStatus = room_data.data.status;

        const newStatus = currentStatus === 'OPEN' ? 'CLOSED' : 'OPEN';

        await axios.patch(`http://localhost:5000/admin/rooms/status/${id}`, {
            status: newStatus
        });

        getRooms();
    }

    useEffect(() => {
        getRooms()
    }, [])

    return (
        <div>
            <div className='my-8'>
                <h1 className='text-center text-5xl font-bold'>Daftar Ruangan</h1>
                <div className='grid grid-cols-1 grid-rows-1 justify-items-center my-2'>
                    <NavLink to={"/admin/rooms/addroom"}>
                        <button class="py-2 px-4 bg-transparent text-green-600 font-semibold border border-green-600 rounded hover:bg-green-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">Add Room</button>
                    </NavLink>
                </div>
            </div>

            <table class="min-w-full border-collapse block md:table border-4 border-white">
                <thead class="block md:table-header-group">
                    <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                        <th class="bg-slate-900 p-2 text-white text-center font-bold md:border md:border-grey-500 block md:table-cell">No</th>
                        <th class="bg-slate-900 p-2 text-white text-center font-bold md:border md:border-grey-500 block md:table-cell">Nama Ruangan</th>
                        <th class="bg-slate-900 p-2 text-white text-center font-bold md:border md:border-grey-500 block md:table-cell">Kontak Pemilik</th>
                        <th class="bg-slate-900 p-2 text-white text-center font-bold md:border md:border-grey-500 block md:table-cell">Status</th>
                        <th class="bg-slate-900 p-2 text-white text-center font-bold md:border md:border-grey-500 block md:table-cell">Created At</th>
                        <th class="bg-slate-900 p-2 text-white text-center font-bold md:border md:border-grey-500 block md:table-cell">Updated At</th>
                        <th class="bg-slate-900 p-2 text-white text-center font-bold md:border md:border-grey-500 block md:table-cell">Actions</th>
                    </tr>
                </thead>
                <tbody class="block md:table-row-group">
                    {rooms.map((room, index) => (
                        <tr className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-300'
                            } border border-grey-500 md:border-none block md:table-row`}>
                            <td className="p-2 md:border md:border-grey-500 block md:table-cell md:text-center text-left">
                                <span className="inline-block w-1/3 md:hidden font-bold">No</span>{index + 1}
                            </td>
                            <td className="p-2 md:border md:border-grey-500 block md:table-cell md:text-center text-left">
                                <span className="inline-block w-1/3 md:hidden font-bold">Nama Ruangan</span>{room.name}
                            </td>
                            <td className="p-2 md:border md:border-grey-500 block md:table-cell md:text-center text-left">
                                <span className="inline-block w-1/3 md:hidden font-bold">Kontak Pemilik</span>{room.kontak_pemilik}
                            </td>
                            <td className="p-2 md:border md:border-grey-500 block md:table-cell md:text-center text-left">
                                <span className="inline-block w-1/3 md:hidden font-bold">Status</span>{room.status}
                            </td>
                            <td className="p-2 md:border md:border-grey-500 block md:table-cell md:text-center text-left">
                                <span className="inline-block w-1/3 md:hidden font-bold">Status</span>{room.createdAt}
                            </td>
                            <td className="p-2 md:border md:border-grey-500 block md:table-cell md:text-center text-left">
                                <span className="inline-block w-1/3 md:hidden font-bold">Status</span>{room.updatedAt}
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell items-center justify-center md:text-center">
                                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                <Link to={`/admin/rooms/detailroom/${room.id}`}>
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 mt-1 px-2 border border-green-500 rounded">Detail</button>
                                </Link>
                                <Link to={`/admin/rooms/${room.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mt-1 px-2 border border-blue-500 rounded ml-2">Edit</button>
                                </Link>
                                <button onClick={() => deleteRoom(room.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 mt-1 px-2 border border-red-500 rounded ml-2">Delete</button>
                                <button onClick={() => changeStatus(room.id)} className="bg-lime-500 hover:bg-lime-700 text-white font-bold mt-1 py-1 px-2 border border-lime-500 rounded ml-2">Change Status</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Rooms