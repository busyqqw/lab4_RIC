# Базовий образ з Node.js
FROM node:18

# Робоча директорія у контейнері
WORKDIR /app

# Додаємо змінні середовища
ENV PORT=4000
ENV APP_ENV=production

# Копіюємо package.json і package-lock.json (якщо є)
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проєкт у контейнер
COPY . .

# Відкриваємо новий порт
EXPOSE 4000

# Команда запуску
CMD ["npm", "start"]
