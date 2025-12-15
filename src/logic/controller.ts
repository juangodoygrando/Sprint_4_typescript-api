import { initJokeUI } from "../ui/ratingJoke/uiRatingJoke";
import { getDadJoke } from "./randomDadJoke/logicDadJoke";
import { getOfficialJoke } from "./randomOfficialJoke/logicofficialJoke";

export async function selectedApi(): Promise<string | undefined> {
  const randomNum = Math.floor(Math.random() * 2) + 1;

  let joke: string | undefined;
  if (randomNum === 1) {
    return (joke = await getDadJoke());
  } else {
    return (joke = await getOfficialJoke());
  }
}

export async function initJoke(): Promise<void> {
  const joke = await selectedApi();

  initJokeUI(joke);
}
