import type z from "zod";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export async function apiCall<T>(
  url: string,
  schema: z.ZodSchema<T>,
  options?: RequestInit
): Promise<T | undefined> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const jsonData = await response.json();
    const data = schema.parse(jsonData);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error capturado: ", error.message);
      Toastify({
        text: "No information could be obtained from the API",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        backgroundColor: "#ef4444",
      }).showToast();
    }
    return undefined;
  }
}
