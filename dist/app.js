"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
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
exports.default = app;
