import type { weatherResponse } from "../../logic/weather/weatherSchema";

const weatherWidget = document.getElementById(
  "weather-widget"
) as HTMLDivElement;

export async function printWeather(
  getWeather: Promise<weatherResponse | undefined>
): Promise<void> {
  const weather = await getWeather;

  if (weather) {
    weatherWidget.innerHTML = `<div 
      class="fixed top-5 right-5 w-44 bg-gray-300 bg-opacity-70 rounded-2xl shadow-lg p-4 text-center">

      <img id="weather-icon" class="mx-auto w-16 h-16 mb-2" src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="Icono del clima">

      <div id="weather-main" class="text-lg font-bold mb-1">${weather.description}</div>

      <div id="weather-temp" class="text-3xl font-extrabold mb-2">${weather.temp}°C</div>

      <div id="weather-minmax" class="flex justify-between text-sm">
        <span id="weather-min">Min: ${weather.temp_min}°C</span>
        <span id="weather-max">Max: ${weather.temp_max}°C</span>
      </div>
    </div>`;
  }
}
