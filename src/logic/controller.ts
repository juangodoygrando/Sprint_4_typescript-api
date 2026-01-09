import { initJokeUI } from "../ui/ratingJoke/uiRatingJoke";
import { getDadJoke } from "./randomDadJoke/logicDadJoke";
import { getOfficialJoke } from "./randomOfficialJoke/logicofficialJoke";

export async function selectedApi(): Promise<string | undefined> {
  const randomNum = Math.floor(Math.random() * 2) + 1;

  if (randomNum === 1) {
    return await getDadJoke();
  } else {
    return await getOfficialJoke();
  }
}

export async function initJoke(): Promise<void> {
  const joke = await selectedApi();

  initJokeUI(joke);
}
