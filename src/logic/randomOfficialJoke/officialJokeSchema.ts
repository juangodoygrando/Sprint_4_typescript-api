import {  z } from "zod";


 const OfficialJokeResponse = z.object({
  setup: z.string(),
  punchline: z.string(),
});

export const officialJokeSchemaTransformed = OfficialJokeResponse.transform(
  (data) => ({
    joke: `${data.setup} ${data.punchline}`,
  })
);

