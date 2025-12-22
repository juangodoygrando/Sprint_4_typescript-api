import type { storageStructure } from "./storageSchema";

let reportJokes: storageStructure[] = [];

export function getRatings(): storageStructure[] {
  if (reportJokes.length === 0) {
    const saved = localStorage.getItem("reportJokes");
    reportJokes = saved ? JSON.parse(saved) : [];
  }
  return [...reportJokes];
}

export function addRating(rating: storageStructure): void {
  reportJokes.push(rating);
  localStorage.setItem("reportJokes", JSON.stringify(reportJokes));
}

export function updateRatingsStorage(newlist: storageStructure[]) {
  reportJokes = newlist;
  localStorage.setItem("reportJokes", JSON.stringify(reportJokes));
}
