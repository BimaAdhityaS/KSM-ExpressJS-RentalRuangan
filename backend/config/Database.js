import { Sequelize } from "sequelize";

const db = new Sequelize('ksm_rentalruangan', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;