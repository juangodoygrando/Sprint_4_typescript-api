import { getDate } from "../../services/date/getDate";
import type { storageStructure } from "../../services/storage/interfaceStorage";
import { addRating } from "../../services/storage/storgeLogic";



export function saveRatings(joke: string, score: string | undefined) {
  const newRating: storageStructure = {
    joke: joke,
    score: score ?? "no score",
    date: getDate(),
  };

  addRating(newRating);
}
