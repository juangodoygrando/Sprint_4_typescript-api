import { apiCall } from "../../services/api/apicall";
import { APIKEY_OPENWEATHER, URL_OPENWEATHER } from "../../services/env";
import { getCoordinates } from "../../services/location/location";
import { printWeather } from "../../ui/weather/uiWeather";
import {
  weatherSchemaTransformed,
  type weatherResponse,
} from "./weatherSchema";


async function buildWeatherUrl() {
  const { lat, lon } = await getCoordinates();

  const url = `${URL_OPENWEATHER}lat=${lat}&lon=${lon}&appid=${APIKEY_OPENWEATHER}&units=metric`;
  return url;
}

 async function getWeather(): Promise<weatherResponse | undefined> {
  return apiCall(await buildWeatherUrl(), weatherSchemaTransformed);
}


export async function initWeather(){
printWeather(getWeather())
}
