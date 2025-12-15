import { apiCall } from "../../services/api/apicall";
import { URL_DADJOKE } from "../../services/env";

import { jokeDadSchema } from "./jokeDadSchema";

export async function getDadJoke(): Promise<string | undefined> {
  return apiCall(URL_DADJOKE, jokeDadSchema, {
    headers: { Accept: "application/json" },
  });
}
