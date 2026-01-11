import type { weatherResponse } from "../../logic/weather/weatherSchema";

const weatherWidget = document.getElementById(
  "weather-widget"
) as HTMLDivElement;

export async function printWeather(
  getWeather: Promise<weatherResponse | undefined>
): Promise<void> {
  weatherWidget.innerHTML = `
    <div class="w-auto h-auto  p-3  flex flex-col rounded-lg items-center justify-center lg:fixed lg:top-5 lg:right-5 bg-gradient-to-r from-teal-400/40  to-sky-600/40">
      <h4 class="mb-5 text-xs font-semibold">Loading weather...</h4>
      <div class="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  `;

  const weather = await getWeather;

  if (weather) {
    weatherWidget.innerHTML = `<div
  class="w-auto h-auto text-center text-gray-700 bg-gradient-to-r from-teal-400/40  to-sky-600/40 px-1 pb-1 rounded-lg md:p-3"
  
  "
>
  <img id="weather-icon" class="mx-auto "
       src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" />

  <div class="text-[12px] md:text-base font-semibold capitalize">
    ${weather.description}
  </div>

  <div class="text-sm md:text-xl font-extrabold">
    ${weather.temp}°C
  </div>

  <div class="flex gap-1 text-[12px] md:text-xs justify-center capitalize">
    <span>Min ${weather.temp_min}°</span>
    <span>Max ${weather.temp_max}°</span>
  </div>
</div>
`;
  }
}
