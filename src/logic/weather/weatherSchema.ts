import z from "zod";

const weatherSchema = z.object({
  weather: z.array(
    z.object({
      description: z.string(),
      icon: z.string(),
    })
  ),
  main: z.object({
    temp: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
  }),
});

export const weatherSchemaTransformed = weatherSchema.transform((data) => ({
  description: data.weather[0].description,
  icon: data.weather[0].icon,
  temp: data.main.temp,
  temp_min: data.main.temp_min,
  temp_max: data.main.temp_max,
}));

export type weatherResponse = z.infer<typeof weatherSchemaTransformed>;
