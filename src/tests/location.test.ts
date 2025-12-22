import { describe, it, expect, beforeAll } from "vitest";
import { getCoordinates, getLocation } from "../services/location/location"; 

// crear navigator si no existe
beforeAll(() => {
  // @ts-expect-error
  if (!globalThis.navigator) globalThis.navigator = {};
});

function mockGeolocation(success = true, coords = { latitude: 10, longitude: 20 }) {
  Object.defineProperty(globalThis.navigator, "geolocation", {
    value: {
      getCurrentPosition: success
        ? (cb: any) => cb({ coords })
        : (_: any, errCb: any) => errCb(new Error("Test error")),
    },
    configurable: true, // ⚠️ necesario para redefinir
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

describe("getLocation()", () => {
  it("retorna string lat=...&lon=...", async () => {
    mockGeolocation(true, { latitude: 10, longitude: 20 });

    const result = await getLocation();

    expect(result).toBe("lat=10&lon=20");
  });
});
