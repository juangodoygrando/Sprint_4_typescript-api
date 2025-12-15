import { initJoke } from "./randomDadJoke/logicRandomJoke";
import { initWeather } from "./weather/weather";

export async function initApp() {
  await initJoke();
  initWeather();
}
