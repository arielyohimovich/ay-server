# השתמש בתמונה קטנה ובטוחה של Node.js
FROM node:20-alpine

# הגדר את תיקיית העבודה בקונטיינר
WORKDIR /app

# העתק את קבצי ה-package.json והתקן תלויות
COPY package*.json ./
RUN npm install --production

# העתק את כל הקבצים לקונטיינר
COPY . ./

# קומפילציה של TypeScript
RUN npm run build

# ציין שהקונטיינר יאזין לפורט 4000
EXPOSE 4000

# הגדר משתנה סביבה לפרודקשן
ENV NODE_ENV=production

# הרץ את האפליקציה
CMD ["node", "dist/server.js"]
