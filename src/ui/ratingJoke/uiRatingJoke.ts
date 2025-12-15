import { selectedApi } from "../../logic/controller";
import { saveRatings } from "../../logic/ratingsJoke/ratingsLogic";

import { getRatings } from "../../services/storage/storgeLogic";
import {
  getNewBlob,
  nextJokeButton,
  printJoke,
} from "../randomJoke/uiRandomJoke";

export const ratingDiv = document.getElementById("ratingDiv") as HTMLDivElement;

export const allIcons = document.querySelectorAll(".iconImage");

export let selectedRating: string | undefined = undefined;

function resetRatings(): void {
  selectedRating = undefined;
  allIcons.forEach((icon) => icon.classList.remove("grayscale"));
}

function ratingListeners(e: MouseEvent): void {
  const target = e.target as HTMLElement;

  if (!target.classList.contains("iconImage")) return;

  allIcons.forEach((icon) => icon.classList.remove("grayscale"));

  allIcons.forEach((icon) => {
    if (icon !== target) icon.classList.add("grayscale");
  });
  selectedRating = target.dataset.value;
}

function clickOutside(e: MouseEvent): void {
  const target = e.target as HTMLElement;

  const isIcon = target.classList.contains("iconImage");

  if (!isIcon) {
    resetRatings();
  }
}

export async function initJokeUI(joke: string | undefined): Promise<void> {
  let newJoke: string | undefined = joke;
  if (newJoke) {
    printJoke(newJoke);
  }

  ratingDiv.addEventListener("click", ratingListeners);
  document.addEventListener("click", clickOutside);

  nextJokeButton.addEventListener("click", async () => {
    if (newJoke) {
      saveRatings(newJoke, selectedRating);
    }

    newJoke = await selectedApi();
    getNewBlob();
    if (newJoke) {
      printJoke(newJoke);
    }

    resetRatings();
    console.log(getRatings());
  });
}
