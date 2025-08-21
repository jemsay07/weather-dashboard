"use client";

import React, { useState } from 'react';

import { fetchCurrentWeather, fetchForecast  } from './utils/fetchWeather';

import SearchBar from './components/SearchBar';
import WeatherCard from "./components/WeatherCard";
import ForecastList from './components/ForecastList';

interface Weather {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}
interface Forecast {
  list: ForecastItem[];
}

export default function Home() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city: string) => {
    try {
      setLoading(true);
      setError(null);

      const current = await fetchCurrentWeather(city);
      const forecastData = await fetchForecast(city);

      setWeather(current);
      setForecast(forecastData);
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6">🌤️ Weather Dashboard</h1>

        <SearchBar onSearch={handleSearch} />

        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <WeatherCard data={weather} loading={loading} error={error} />
        <ForecastList data={forecast} loading={loading} error={error} />

      </main>
    </div>
  );
}