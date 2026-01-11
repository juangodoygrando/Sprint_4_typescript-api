import { apiCall } from "../../services/api/apicall";
import { URL_OFFICIALJOKE } from "../../services/env";
import { officialJokeSchemaTransformed } from "./officialJokeSchema";

export async function getOfficialJoke(): Promise<string> {
  const result = await apiCall(
    URL_OFFICIALJOKE,
    officialJokeSchemaTransformed,
    {
      headers: { Accept: "application/json" },
    }
  );

  if (!result) {
    throw new Error("No joke received");
  }

  return result.joke;
}


