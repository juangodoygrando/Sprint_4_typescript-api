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
  class=" fixed top-5 right-5 w-52 h-64 p-6 text-center text-gray-700"
  style="
    background-image: url('/blob/blob_4.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  "
>
  <img id="weather-icon" class="mx-auto w-14 h-14 mb-1"
       src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" />

  <div class="text-sm font-semibold capitalize">
    ${weather.description}
  </div>

  <div class="text-3xl font-extrabold">
    ${weather.temp}°C
  </div>

  <div class="flex gap-2">
    <span>Min ${weather.temp_min}°</span>
    <span>Max ${weather.temp_max}°</span>
  </div>
</div>
`;
  }
}
