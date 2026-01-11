import {  z } from "zod";


export const OfficialJokeResponse = z.object({
  setup: z.string(),
  punchline: z.string(),
});

export const officialJokeSchemaTransformed = OfficialJokeResponse.transform(
  (data) => ({
    joke: `${data.setup} ${data.punchline}`,
  })
);

export type officialJokeResponse=z.infer<typeof officialJokeSchemaTransformed >