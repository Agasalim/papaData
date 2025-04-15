import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/data", (req, res) => {
  fs.readFile("data.json", "utf8", (err, jsonData) => {
    if (err) {
      return res.status(500).json({ error: "Fayl oxunarkən xəta baş verdi" });
    }
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData);
  });
});

app.listen(PORT, () => {
  console.log(`Server işləyir: http://localhost:${PORT}`);
});
