import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define('produk', {
    nama_produk:{
        type: DataTypes.STRING
    },
    keterangan:{
        type: DataTypes.STRING
    },
    harga:{
        type: DataTypes.DOUBLE
    },
    jumlah:{
        type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Product;