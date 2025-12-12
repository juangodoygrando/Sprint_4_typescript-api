import { getDate } from "../../services/date/getDate";
import type { storageStructure } from "../../services/storage/interfaceStorage";
import { addRating } from "../../services/storage/storgeLogic";

export const ratingDiv = document.getElementById("ratingDiv") as HTMLDivElement;

export const allIcons = document.querySelectorAll(".iconImage");

export let elementoclickeado: string | undefined = undefined;

export function resetRatings() {
  elementoclickeado = undefined;
  allIcons.forEach((icon) => icon.classList.remove("grayscale"));
}

export function ratingListeners(e: MouseEvent) {
  const target = e.target as HTMLElement;

  if (!target.classList.contains("iconImage")) return;

  allIcons.forEach((icon) => icon.classList.remove("grayscale"));

  allIcons.forEach((icon) => {
    if (icon !== target) icon.classList.add("grayscale");
  });
  elementoclickeado = target.dataset.value;
}

export function clickfuera(e: MouseEvent) {
  const target = e.target as HTMLElement;

  const isIcon = target.classList.contains("iconImage");

  if (!isIcon) {
    resetRatings();
  }
}

export function saveRatings(joke: string, score: string | undefined) {
  const newRating: storageStructure = {
    joke: joke,
    score: score ?? "no score",
    date: getDate(),
  };

  addRating(newRating);
}
