import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Rooms = db.define('rooms', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kapasitas:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    alamat:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    deskripsi: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pay_per:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lokasi_url:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    url:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    kontak_pemilik:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        validate: {
            isIn: [['BOOKED', 'OPEN', 'CLOSED']]
        }
    }
},{
    freezeTableName: true
})

export default Rooms;

// (async () => {
//     await db.sync();
// })();