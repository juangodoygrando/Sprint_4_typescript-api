import z from "zod";

const WeatherResponse = z.object({
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

export const weatherSchemaTransformed = WeatherResponse.transform((data) => ({
  description: data.weather[0].description,
  icon: data.weather[0].icon,
  temp: Math.floor(data.main.temp),
  temp_min: Math.floor(data.main.temp_min),
  temp_max: Math.floor(data.main.temp_max),
}));

export type weatherResponse = z.infer<typeof weatherSchemaTransformed>;
