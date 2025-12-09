export const urlRandomDadJoke = import.meta.env.VITE_urlRandomDadJoke;

export async function newApiCall(url: string) {
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!resp.ok) {
      throw new Error(`${resp.status}`);
    }
    const data = await resp.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error capturado: ", error.message);
    }
    return
  }
}


console.log(object)