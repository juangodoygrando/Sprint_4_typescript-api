import { initJokeUI } from "../ui/ratingJoke/uiRatingJoke";
import { getDadJoke } from "./randomDadJoke/logicRandomJoke";

export async function initJoke(): Promise<void> {
  let joke: string|undefined = await getDadJoke();
  initJokeUI(joke);
}
