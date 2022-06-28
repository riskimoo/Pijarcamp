import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors"

const app = express();

try {
    await db.authenticate();
    console.log("database connected")
} catch (error) {
    console.error("connection error", error)
}

app.use(cors());
app.use(express.json());
app.use('/api/produk', productRoutes);

app.listen(5000, () => console.log("server run 5000"));