import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/colleges", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Delhi Tech University",
      location: "Delhi",
      fees: 120000,
      rating: 4.3,
      placement_percentage: 85,
    },
    {
      id: 2,
      name: "Noida Engineering College",
      location: "Noida",
      fees: 100000,
      rating: 4.0,
      placement_percentage: 80,
    },
  ]);
});

export default app;
