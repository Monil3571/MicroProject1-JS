import express from "express";
import cors from "cors";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); // Allow cross-origin requests
app.use(express.static("public")); // Serve static files
app.get("/api/cars", async (req, res) => {
    try {
        const data = await readFile(path.join(__dirname, "data", "cars.json"), "utf-8");
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ message: "Error reading car data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
