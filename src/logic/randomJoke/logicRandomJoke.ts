

import { getRandomJoke, urlRandomDadJoke } from "../../services/api/apiCall";
import type { Joke, jokeApiResponse } from "../../services/api/apiInterface";

export function covertResponse(
  dataApi: jokeApiResponse | undefined
): string | undefined {
  if (dataApi) {
    const dataConvert: Joke = {
      joke: dataApi.joke,
    };
    return dataConvert.joke;
  } else {
    return undefined;
  }
}

export async function getJoke(): Promise<string> {
  const joke = covertResponse(await getRandomJoke(urlRandomDadJoke));

  if (!joke) throw new Error("Invalid joke from API");

  return joke;
}
