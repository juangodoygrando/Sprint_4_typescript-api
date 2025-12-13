import { initJokeUI } from "../ui/ratingJoke/uiRatingJoke";
import { getJoke } from "./randomJoke/logicRandomJoke";

export async function initJoke(): Promise<void> {
  let joke: string = await getJoke();
  initJokeUI(joke);
}
