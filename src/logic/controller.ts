import { initJokeUI } from "../ui/ratingJoke/uiRatingJoke";
import { getDadJoke } from "./randomDadJoke/dadJoke";
import { getOfficialJoke } from "./randomOfficialJoke/officialJoke";

export async function getRandomJoke(): Promise<string | undefined> {
  const apiChoice = Math.floor(Math.random() * 2) + 1;

  if (apiChoice === 1) {
    return await getDadJoke();
  } else {
    return await getOfficialJoke();
  }
}

export async function initJoke(): Promise<void> {
  const joke = await getRandomJoke();

  initJokeUI(joke);
}
