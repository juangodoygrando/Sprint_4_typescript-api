import type z from "zod";

export const urlRandomDadJoke = import.meta.env.VITE_urlRandomDadJoke;
export const urlOpenWeather = import.meta.env.VITE_urlOpenWeather;

export async function apiCall<T>(
  url: string,
  schema: z.ZodSchema<T>,
  options?: RequestInit
): Promise<T | undefined> {
  try {
    const resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error(`${resp.status}`);
    }
    const json = await resp.json();
    const data = schema.parse(json);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error capturado: ", error.message);
    }
    return undefined;
  }
}
