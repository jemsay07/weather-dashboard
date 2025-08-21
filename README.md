# 🌤️ Weather Dashboard

A simple **Weather Dashboard** built with **Next.js, React, and TypeScript**.  
This app allows users to search for any city and view both **current weather** and a **5-day forecast**, powered by the [OpenWeatherMap API](https://openweathermap.org/).

---

## 🚀 Features
- 🌍 Search for current weather by city  
- 📊 View temperature, conditions, and description  
- ⏳ Get a 5-day forecast (daily summary)  
- 🔒 Secure API key handling via **Next.js API Routes**  
- 🎨 Clean and responsive UI built with **Tailwind CSS**

---

## 🛠️ Tech Stack
- [Next.js 13+ (App Router)](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/)

---

## 📂 Project Structure
weather-dashboard/ \
│── app/ \
│ ├── api/ <br> 
│ │ └── weather/route.ts # API proxy to OpenWeatherMap\
│ ├── components/ \
│ │ ├── SearchBar.tsx # Search city input \
│ │ ├── WeatherCard.tsx # Current weather display \
│ │ └── ForecastList.tsx # 5-day forecast cards \
│ └── page.tsx # Main page (search + results) \
│── utils/ \
│ └── fetchWeather.ts # Optional fetch helper \
│── .env.local # API key storage \
│── package.json \
│── tailwind.config.js \
│── README.md


---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   ```
   cd weather-dashboard

2. **Install dependencies**
   
    npm install
    or
    yarn install
  
3. **Add environment variables**
   Create a .env.local file in the root directory:
 
   OPENWEATHER_API_KEY=your_api_key_here

4.  **Run the development server**
   
    npm run dev
    or
    yarn dev

---

## 📸 Screenshots (Optional)

<img width="500" height="284" alt="image" src="https://github.com/user-attachments/assets/2108e5a4-923e-4967-a5fa-bf76f2e461b4" />

---

## 🙌 Acknowledgements

OpenWeatherMap
 for the free weather API

Next.js
 & Vercel
 for the framework and deployment
 
---

 ## 📌 Future Improvements

- Add weather icons (sun, cloud, rain)
- Add hourly forecast view
- Save favorite cities in local storage
- Dark mode toggle

---

### 👨‍💻 Author
Made with ❤️ by Jemson A. Sayre
