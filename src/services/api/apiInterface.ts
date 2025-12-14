import {  z } from "zod";

export const jokeDadSchema = z.object({ joke: z.string() }).transform(object=>object.joke)

export type jokeDadResponse = z.infer<typeof jokeDadSchema>;





/* const weatherSchema = z.object({
  weather: z.array(
    z.object({
      main: z.string(),
      icon: z.string(),
    })
  ),
  main: z.object({
    temp: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
  }),
});

export type weatherResponse = z.infer<typeof weatherSchema>;
 */