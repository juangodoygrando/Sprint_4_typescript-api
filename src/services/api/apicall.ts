import { jokeDadSchema, type jokeDadResponse } from "../../logic/randomDadJoke/jokeDadSchema";



export const urlRandomDadJoke = import.meta.env.VITE_urlRandomDadJoke;

export async function getRandomJoke(  url: string): Promise<jokeDadResponse | undefined> {
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
    const json = await resp.json();
    const data = jokeDadSchema.parse(json)

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error capturado: ", error.message);
    }
    return undefined;
  }
}

