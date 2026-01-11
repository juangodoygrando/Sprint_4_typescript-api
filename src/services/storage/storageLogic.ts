import type { StorageStructure } from "./storageSchema";

let reportJokes: StorageStructure[] = [];

export function getRatings(): StorageStructure[] {
  if (reportJokes.length === 0) {
    const saved = localStorage.getItem("reportJokes");
    reportJokes = saved ? JSON.parse(saved) : [];
  }
  return [...reportJokes];
}

export function addRating(rating: StorageStructure): void {
  reportJokes.push(rating);
  localStorage.setItem("reportJokes", JSON.stringify(reportJokes));
}


