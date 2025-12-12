import { getRatings } from "../services/storage/storgeLogic";
import { nextJokeButton, printJoke } from "../ui/randomJoke/uiRandomJoke";
import { getJoke } from "./randomJoke/logicRandomJoke";
import {
  clickfuera,
  elementoclickeado,
  ratingDiv,
  ratingListeners,
  resetRatings,
  saveRatings,
} from "./ratingsJoke/ratingsLogic";

export async function showAndPrintJoke(): Promise<void> {
  let newJoke: string = await getJoke();
  printJoke(newJoke);

  ratingDiv.addEventListener("click", ratingListeners);
  document.addEventListener("click", clickfuera);

  nextJokeButton.addEventListener("click", async () => {
    saveRatings(newJoke, elementoclickeado);

    newJoke = await getJoke();

    printJoke(newJoke);

    resetRatings();
    console.log(getRatings());
  });
}
