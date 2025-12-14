import {  z } from "zod";

export const jokeDadSchema = z.object({ joke: z.string() }).transform(object=>object.joke)

export type jokeDadResponse = z.infer<typeof jokeDadSchema>;
;
