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
app.get("/sum", (req, res) => {
    const { firstNum, secondNum } = req.body;
    const sum = Number(firstNum) + Number(secondNum);
    res.json({
        msg: sum,
    });
});
app.listen(3000, () => {
    console.log("app is listening at port 3000");
});
