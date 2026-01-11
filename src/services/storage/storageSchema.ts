/* eslint-disable @typescript-eslint/no-unused-vars */
import  z from "zod";

const storageSchema = z.object({
  joke: z.string(),
  score: z.string(),
  date: z.string().nullable(),
});

export type StorageStructure = z.infer<typeof storageSchema>;
