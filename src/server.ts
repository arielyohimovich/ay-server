import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// שימוש ב-PORT מתוך environment variables עם ערך ברירת מחדל
const port: number = parseInt(process.env.PORT || '4000', 10);

// Middleware לאפשר CORS
app.use(cors());

// Middleware לקריאת JSON בבקשות
app.use(express.json());

// Middleware ללוגים
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// מונה גלובלי
let counter: number = 0;

// Health Check Endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'API is running!' });
});

// אנדפוינט לשליחת הודעה
app.get('/api/message', (req: Request, res: Response) => {
  counter++; // הגדלת המונה
  res.json({ message: ` new message ${counter}` });
});

// הרצת השרת
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
