import { initJoke } from "./logic/controller";
import { initWeather } from "./logic/weather/weather";

import "./style.css";

await initJoke();
await initWeather();
