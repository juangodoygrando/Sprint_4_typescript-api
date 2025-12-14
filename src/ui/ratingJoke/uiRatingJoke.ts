import { getJoke } from "../../logic/randomDadJoke/logicRandomJoke";
import { saveRatings } from "../../logic/ratingsJoke/ratingsLogic";
import { getRatings } from "../../services/storage/storgeLogic";
import { nextJokeButton, printJoke } from "../randomJoke/uiRandomJoke";

export const ratingDiv = document.getElementById("ratingDiv") as HTMLDivElement;

export const allIcons = document.querySelectorAll(".iconImage");

export let selectedRating: string | undefined = undefined;

function resetRatings():void {
  selectedRating = undefined;
  allIcons.forEach((icon) => icon.classList.remove("grayscale"));
}

function ratingListeners(e: MouseEvent):void {
  const target = e.target as HTMLElement;

  if (!target.classList.contains("iconImage")) return;

  allIcons.forEach((icon) => icon.classList.remove("grayscale"));

  allIcons.forEach((icon) => {
    if (icon !== target) icon.classList.add("grayscale");
  });
  selectedRating = target.dataset.value;
}

function clickOutside(e: MouseEvent):void {
  const target = e.target as HTMLElement;

  const isIcon = target.classList.contains("iconImage");

  if (!isIcon) {
    resetRatings();
  }
}

export async function initJokeUI(joke: string): Promise<void> {
  let newJoke: string = joke;
  printJoke(newJoke);

  ratingDiv.addEventListener("click", ratingListeners);
  document.addEventListener("click", clickOutside);

  nextJokeButton.addEventListener("click", async () => {
    saveRatings(newJoke, selectedRating);

    newJoke = await getJoke();

    printJoke(newJoke);

    resetRatings();
    console.log(getRatings());
  });
}
