import {  z } from "zod";

export const DadJokeResponse = z
  .object({ joke: z.string() })
  .transform((object) => object.joke);

