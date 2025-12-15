import { apiCall, urlRandomDadJoke } from "../../services/api/apiCall";
import { initJokeUI } from "../../ui/ratingJoke/uiRatingJoke";
import { jokeDadSchema } from "./jokeDadSchema";



export async function getDadJoke(): Promise<string | undefined> {
  return apiCall(
    urlRandomDadJoke,
    jokeDadSchema,
    {
      headers: { Accept: "application/json" }
    }
  );
}

export async function initJoke(): Promise<void> {
  let joke: string|undefined = await getDadJoke();
  initJokeUI(joke);
}