import { getRandomJoke, urlRandomDadJoke } from "../../services/api/apiCall.ts";
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
  const joke = await covertResponse(await getRandomJoke(urlRandomDadJoke));

  if (!joke) throw new Error("Invalid joke from API");

  return joke;
}
