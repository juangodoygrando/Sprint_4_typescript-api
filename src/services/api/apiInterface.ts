import { z } from "zod";

const jokeApiSchema = z.object({ joke: z.string() });


export type jokeApiResponse=z.infer<typeof jokeApiSchema>

export interface Joke{
    joke:string
}