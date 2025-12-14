import { getRandomJoke, urlRandomDadJoke } from "../../services/api/apiCall";




export async function getJoke(): Promise<string> {
  
  const joke=await getRandomJoke(urlRandomDadJoke)

  if (!joke) throw new Error("Invalid joke from API");

  return joke;
}
