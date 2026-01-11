import { describe, it, expect, beforeAll } from "vitest";
import { getCoordinates } from "../services/location/location"; 


beforeAll(() => {
  
  if (!globalThis.navigator) {
    globalThis.navigator = {} as Navigator;
  }
});

function mockGeolocation(success = true, coords = { latitude: 10, longitude: 20 }) {
  Object.defineProperty(globalThis.navigator, "geolocation", {
    value: {
      getCurrentPosition: success
        ? (cb: any) => cb({ coords })
        : (_: any, errCb: any) => errCb(new Error("Test error")),
    },
    configurable: true, 
  });
}

describe("getCoordinates()", () => {
  it("devuelve lat y lon correctamente", async () => {
    mockGeolocation(true, { latitude: 40, longitude: -3 });

    const result = await getCoordinates();

    expect(result).toEqual({
      lat: 40,
      lon: -3,
    });
  });

  it("lanza error si no hay geolocalización", async () => {
    Object.defineProperty(globalThis.navigator, "geolocation", {
      value: undefined,
      configurable: true,
    });

    await expect(getCoordinates()).rejects.toThrow("La geolocalización no es compatible");
  });
});


