require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDatabase = require("./config/database");
const careerRoutes = require("./routes/careerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

let databaseConnected = false;

async function ensureDatabaseConnection() {
    if (!databaseConnected) {
        await connectDatabase();
        databaseConnected = true;
    }
}

app.use(async (req, res, next) => {
    try {
        await ensureDatabaseConnection();
        next();
    } catch (error) {
        console.error("Database connection failed:", error.message);

        res.status(500).json({
            success: false,
            message: "Database connection failed"
        });
    }
});

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "SkillGraph API is running"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        database: "CognoDB"
    });
});

app.use("/api/careers", careerRoutes);

module.exports = app;