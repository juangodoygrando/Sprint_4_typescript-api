import { initJokeUI } from "../ui/ratingJoke/uiRatingJoke";
import { getJoke } from "./randomDadJoke/logicRandomJoke";

export async function initJoke(): Promise<void> {
  let joke: string = await getJoke();
  initJokeUI(joke);
}
