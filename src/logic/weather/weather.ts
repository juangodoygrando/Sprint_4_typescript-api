import { apiCall } from "../../services/api/apiCall";
import { getCoordinates } from "../../services/location/location";
import { printWeather } from "../../ui/weather/uiWeather";
import {
  weatherSchemaTransformed,
  type weatherResponse,
} from "./weatherSchema";

export const urlOpenWeather = import.meta.env.VITE_urlOpenWeather;
export const apiKeyOpenWeather = import.meta.env.VITE_apiKeyOpenWeather;

async function  getUrlWeather() {
  const { lat, lon } = await getCoordinates();

  const url =`${urlOpenWeather}lat=${lat}&lon=${lon}&appid=${apiKeyOpenWeather}&units=metric`;
  return url;
}

 async function getWeather(): Promise<weatherResponse | undefined> {
  return apiCall(await getUrlWeather(), weatherSchemaTransformed);
}


export async function initWeather(){
printWeather(getWeather())
}