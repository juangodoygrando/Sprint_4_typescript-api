import type { jokeApiResponse } from "./interface";

export const urlRandomDadJoke = import.meta.env.VITE_urlRandomDadJoke;

export async function getRandomJoke(
  url: string
): Promise<jokeApiResponse | undefined> {
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!resp.ok) {
      throw new Error(`${resp.status}`);
    }
    const data: jokeApiResponse = await resp.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error capturado: ", error.message);
    }
    return undefined;
  }
}
