import { apiCall, urlRandomDadJoke } from "../../services/api/apiCall";
import { jokeDadSchema } from "./jokeDadSchema";



export async function getDadJoke(): Promise<string | undefined> {
  return apiCall(
    urlRandomDadJoke,
    jokeDadSchema,
    {
      headers: { Accept: "application/json" }
    }
  );
}