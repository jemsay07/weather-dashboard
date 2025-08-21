// export const fetchWeather = async (city: string) => {

//     try{

//         const res = await fetch(`/api/weather?city=${city}`);
//         const data = await res.json();

//         console.log('Weather data:', data);

//         return data;

//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         return null;
//     }
// }

export async function fetchCurrentWeather(city: string) {
  const res = await fetch(`/api/weather?city=${city}&type=current`);
  if (!res.ok) throw new Error("Failed to fetch current weather");
  return res.json();
}

export async function fetchForecast(city: string) {
  const res = await fetch(`/api/weather?city=${city}&type=forecast`);
  if (!res.ok) throw new Error("Failed to fetch forecast");
  return res.json();
}