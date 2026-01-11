import {  z } from "zod";

export const DadJokeResponse = z
  .object({ joke: z.string() })
  .transform((object) => object.joke);

export type jokeDadResponse = z.infer<typeof DadJokeResponse>;
;
