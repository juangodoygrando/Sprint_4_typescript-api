import { apiCall } from "../../services/api/apicall";
import { URL_DADJOKE } from "../../services/env";

import { DadJokeResponse } from "./jokeDadSchema";

export async function getDadJoke(): Promise<string | undefined> {
  return apiCall(URL_DADJOKE, DadJokeResponse, {
    headers: { Accept: "application/json" },
  });
}
