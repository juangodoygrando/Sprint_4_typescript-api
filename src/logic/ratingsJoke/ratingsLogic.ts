import { getDate } from "../../services/date/getDate";
import type { StorageStructure } from "../../services/storage/storageSchema";
import { addRating } from "../../services/storage/storageLogic";

export function saveRatings(joke: string, score: string | undefined) {
  const newRating: StorageStructure = {
    joke: joke,
    score: score ?? "no score",
    date: getDate(),
  };

  addRating(newRating);
}
