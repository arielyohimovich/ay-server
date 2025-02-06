"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// שימוש ב-PORT מתוך environment variables עם ערך ברירת מחדל
const port = parseInt(process.env.PORT || '4000', 10);
// Middleware לאפשר CORS
app.use((0, cors_1.default)());
// Middleware לקריאת JSON בבקשות
app.use(express_1.default.json());
// Middleware ללוגים
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
// מונה גלובלי
let counter = 0;
// Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'API is running!' });
});
// אנדפוינט לשליחת הודעה
app.get('/api/message', (req, res) => {
    counter++; // הגדלת המונה
    res.json({ message: ` new message ${counter}` });
});
// הרצת השרת
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
