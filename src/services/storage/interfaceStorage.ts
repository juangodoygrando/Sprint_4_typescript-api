import z from "zod";

const  storageStructureSchema=z.object({
    joke:z.string(),
    score:z.string(),
    date:z.string().nullable()
})

export type storageStructure=z.infer<typeof storageStructureSchema>