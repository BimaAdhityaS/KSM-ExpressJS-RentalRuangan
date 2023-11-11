import Rooms from "../models/RoomModel.js";
import path from "path";
import { Op } from "sequelize";
import fs from "fs";

export const getAllRoomsBySearch = async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    const offset = page * limit;
    const totalRows = await Rooms.count({
        where : {
            [Op.or]: [{name: {[Op.like]: '%'+search+'%'}}
            ,{alamat: {[Op.like]: '%'+search+'%'}},
            ]
        }
    });
    const totalPage = Math.ceil(totalRows / limit);
    const result = await Rooms.findAll({
        where : {
            [Op.or]: [{name: {[Op.like]: '%'+search+'%'}}
            ,{alamat: {[Op.like]: '%'+search+'%'}},
            ]
        },
        limit: limit,
        offset: offset,
        order: [['id', 'ASC']]
    })

    res.json({
        result : result,
        totalRows : totalRows,
        totalPage : totalPage,
        limit : limit,
        page : page
    });
}

export const getAllRooms = async (req, res) => {
    try {
        const rooms = await Rooms.findAll();
        res.json(rooms);
    } catch (error) {
        console.log(error);
    }
}

export const getRoomById = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await Rooms.findOne({
            where: { id: id }
        });
        res.json(room);
    } catch (error) {
        console.log(error.message);
    }
}

export const createRoom = async (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "Tidak ada file yang diupload" });
    const { name, kapasitas, alamat, deskripsi, price, pay_per, lokasi_url, kontak_pemilik } = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/room/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if (!allowedType.includes(ext)) return res.status(400).json({ message: "Tipe file tidak diperbolehkan" });
    if (fileSize > 10000000) return res.status(400).json({ message: "Ukuran file terlalu besar" });

    file.mv(`./public/images/room/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ message: err.message });
        try {
            await Rooms.create({
                name,
                kapasitas,
                alamat,
                deskripsi,
                price,
                pay_per,
                lokasi_url,
                kontak_pemilik,
                image: fileName,
                url: url,
                status: "CLOSED"
            });
            res.json({ message: "Ruangan berhasil ditambahkan" });
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const updateRoom = async (req, res) => {
    const { id } = req.params;
    const room = await Rooms.findOne({
        where: { id: id }
    });
    let fileName = "";
    if (req.files === null) {
        fileName = room.image;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if (!allowedType.includes(ext)) return res.status(400).json({ message: "Tipe file tidak diperbolehkan" });
        if (fileSize > 10000000) return res.status(400).json({ message: "Ukuran file terlalu besar" });

        const filepath = `./public/images/room/${room.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/room/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    }
    const { name, kapasitas, alamat, deskripsi, price, pay_per, lokasi_url, kontak_pemilik } = req.body;
    const url = `${req.protocol}://${req.get("host")}/images/room/${fileName}`;
    try{
        await Rooms.update({
            name,
            kapasitas,
            alamat,
            deskripsi,
            price,
            pay_per,
            lokasi_url,
            kontak_pemilik,
            image: fileName,
            url: url,
            status: "CLOSED"
        }, {
            where: { id: id }
        });
        res.json({ message: "Ruangan berhasil diupdate" });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const deleteRoom = async (req, res) => {
    const { id } = req.params;
    const room = await Rooms.findOne({
        where: { id: id }
    });
    if (!room) return res.status(400).json({ message: "Ruangan tidak ditemukan" });
    const filepath = `./public/images/room/${room.image}`;
    fs.unlinkSync(filepath);
    try {
        await Rooms.destroy({
            where: { id: id }
        });
        res.json({ message: "Ruangan berhasil dihapus" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateStatusRoom = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        await Rooms.update({
            status: status
        }, {
            where: { id: id }
        });
        res.json({ message: "Status ruangan berhasil diupdate" });
    } catch (error) {
        console.log(error.message);
    }
}