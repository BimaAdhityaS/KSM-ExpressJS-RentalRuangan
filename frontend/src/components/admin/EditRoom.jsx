import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditRoom = () => {
    const {id} = useParams()
    const [name, setname] = useState('')
    const [min_capacity, setmin_capacity] = useState('')
    const [max_capacity, setmax_capacity] = useState('')
    const [alamat, setalamat] = useState('')
    const [deskripsi, setdeskripsi] = useState('')
    const [price, setprice] = useState('')
    const [pay_per, setpay_per] = useState('')
    const [kontak_pemilik, setkontak_pemilik] = useState('')
    const [lokasi_url, setlokasi_url] = useState('')

    const navigate = useNavigate()

    const [file, setfile] = useState('')
    const [preview, setpreview] = useState('')

    let capacity = min_capacity + '-' + max_capacity + ' orang'

    const loadImage = (e) => {
        const image = e.target.files[0]
        setfile(image)
        setpreview(URL.createObjectURL(image))
    }

    const updateRoom = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('name', name)
        formData.append('kapasitas', capacity)
        formData.append('alamat', alamat)
        formData.append('deskripsi', deskripsi)
        formData.append('price', price)
        formData.append('pay_per', pay_per)
        formData.append('kontak_pemilik', kontak_pemilik)
        formData.append('lokasi_url', lokasi_url)
        formData.append('file', file)
        formData.append('status', 'CLOSED')
        try {
            const res = await axios.patch(`http://localhost:5000/admin/rooms/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(res)
            navigate('/admin/rooms')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getRooms = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/admin/rooms/${id}`)
                setname(response.data.name)
                setalamat(response.data.alamat)
                setdeskripsi(response.data.deskripsi)
                setprice(response.data.price)
                setpay_per(response.data.pay_per)
                setkontak_pemilik(response.data.kontak_pemilik)
                setlokasi_url(response.data.lokasi_url)

                const capacityString = response.data.kapasitas
                const capacityParts = capacityString.split("-").map(part => part.trim());

                setmin_capacity(parseInt(capacityParts[0]))
                setmax_capacity(parseInt(capacityParts[1]))

            } catch (error) {
                console.log(error)
            }
        }

        getRooms();
    }, [id])

    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-4'>Tambah Ruangan</h1>
            <div className="flex items-center justify-center p-8 pt-2">
                <div className="mx-auto w-full">
                    <form onSubmit={updateRoom}>
                        <div className="mb-5">
                            <label for="guest" className="mb-3 block text-base font-medium text-[#07074D]">
                                Nama Ruangan<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                placeholder="Nama Ruangan"
                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#07074D] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="flex flex-wrap">
                            <div className="mb-5 mr-10">
                                <label for="guest" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Kapasitas Minimal<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="min_capacity"
                                    id="min_capacity"
                                    placeholder="0"
                                    value={min_capacity}
                                    onChange={(e) => setmin_capacity(e.target.value)}
                                    min="0"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#07074D] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label for="guest" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Kapasitas Maksimal<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="max_capacity"
                                    id="max_capacity"
                                    placeholder="99"
                                    value={max_capacity}
                                    onChange={(e) => setmax_capacity(e.target.value)}
                                    min="0"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#07074D] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>

                        <div className="mb-5">
                            <label for="guest" className="mb-3 block text-base font-medium text-[#07074D]">
                                Alamat<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="alamat"
                                id="alamat"
                                value={alamat}
                                onChange={(e) => setalamat(e.target.value)}
                                placeholder="Alamat"
                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#07074D] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-5">
                            <label for="guest" className="mb-3 block text-base font-medium text-[#07074D]">
                                Deskripsi
                            </label>
                            <textarea
                                name="deskripsi"
                                id="deskripsi"
                                value={deskripsi}
                                onChange={(e) => setdeskripsi(e.target.value)}
                                placeholder="Deskripsi"
                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#07074D] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="mb-5 mr-10">
                                <label for="guest" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Harga<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    placeholder="100000"
                                    value={price}
                                    onChange={(e) => setprice(e.target.value)}
                                    min="0"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#07074D] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="pay_per" className="mb-3 block text-base font-medium text-[#07074D]">
                                    /per<span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="pay_per"
                                    id="pay_per"
                                    value={pay_per}
                                    onChange={(e) => setpay_per(e.target.value)}
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#07074D] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                >
                                    <option value="/xxx">/xxx</option>
                                    <option value="/day">/day</option>
                                    <option value="/month">/month</option>
                                    <option value="/year">/year</option>
                                    <option value="/hours">/hour</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label for="guest" className="mb-3 block text-base font-medium text-[#07074D]">
                                Kontak Pemilik<span className="text-red-500">*</span>
                            </label>
                            <input
                                type='number'
                                name="kontak_pemilik"
                                id="kontak_pemilik"
                                value={kontak_pemilik}
                                onChange={(e) => setkontak_pemilik(e.target.value)}
                                placeholder="0822XXXXXXX"
                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#07074D] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></input>
                        </div>

                        <div className="mb-5">
                            <label for="guest" className="mb-3 block text-base font-medium text-[#07074D]">
                                Link Gmap Lokasi Ruangan
                            </label>
                            <input
                                name="lokasi_url"
                                id="lokasi_url"
                                value={lokasi_url}
                                onChange={(e) => setlokasi_url(e.target.value)}
                                placeholder="https://maps.app.goo.gl/..."
                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#07074D] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></input>
                        </div>

                        <div className='grid grid-cols-1 grid-rows-1 justify-items-center my-2 w-2/3 h-2/3 mx-auto'>
                            <div>
                                <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                                    <p className='text-center'>Gambar Ruangan<span className="text-red-500">*</span></p>
                                    <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span class="mt-2 text-base leading-normal">Upload a file</span>
                                    <input type='file' class="hidden"
                                        onChange={loadImage}
                                    />
                                </label>
                            </div>
                        </div>
                        {preview ? (
                            <div className='grid grid-cols-1 grid-rows-1 justify-items-center my-2 w-2/3 h-2/3 mx-auto'>
                                <div>
                                    <figure>
                                        <img src={preview} alt="preview image" className="rounded-xl" />
                                    </figure>
                                </div>
                            </div>
                        ) : ("")}

                        <div>
                            <button type='submit' className="mt-5 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditRoom