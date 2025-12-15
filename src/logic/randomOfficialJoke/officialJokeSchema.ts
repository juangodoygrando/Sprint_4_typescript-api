import {  z } from "zod";


export const officialJokeSchema=z.object({
    setup:z.string(),
    punchline:z.string()
})

export const officialJokeSchemaTransformed=officialJokeSchema.transform((data)=>({
    joke: `${data.setup} ${data.punchline}`
}))

export type officialJokeResponse=z.infer<typeof officialJokeSchemaTransformed >