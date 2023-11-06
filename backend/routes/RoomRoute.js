import express from "express";
import {
    createRoom,
    deleteRoom,
    getAllRooms,
    getRoomById,
    updateRoom,
    updateStatusRoom
} from "../controllers/RoomController.js";

const router = express.Router();

router.get("/admin/rooms", getAllRooms);
router.get("/admin/rooms/:id", getRoomById);

router.patch("/admin/rooms/:id", updateRoom);
router.patch("/admin/rooms/status/:id", updateStatusRoom);

router.post("/admin/rooms", createRoom);
router.delete("/admin/rooms/:id", deleteRoom);

export default router;