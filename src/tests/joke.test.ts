import { describe, it, expect, vi } from "vitest";
import { getDadJoke } from "../logic/randomDadJoke/logicDadJoke";
import * as api from "../services/api/apicall";
import { getOfficialJoke } from "../logic/randomOfficialJoke/logicofficialJoke";

vi.mock("./apiCall", () => ({
  apiCall: vi.fn(),
}));

describe("getDadJoke", () => {
  it("devuelve una broma de tipo string"),
    async () => {
      vi.spyOn(api, "apiCall").mockResolvedValue("Esto es una broma");
      const result = await getDadJoke();
      expect(result).toBe("Esto es una broma");
      expect(typeof result).toBe("string");
    };

  it("devuelve undefined si apiCall falla", async () => {
    vi.spyOn(api, "apiCall").mockResolvedValue(undefined);

    const result = await getDadJoke();

    expect(result).toBeUndefined();
  });
});

describe("getOfficialJoke", () => {
  it("devuelve una broma de tipo string"),
    async () => {
      vi.spyOn(api, "apiCall").mockResolvedValue("Esto es una broma");
      const result = await getOfficialJoke();
      expect(result).toBe("Esto es una broma");
      expect(typeof result).toBe("string");
    };

  it("devuelve undefined si apiCall falla", async () => {
    vi.spyOn(api, "apiCall").mockResolvedValue(undefined);

    await expect(getOfficialJoke()).rejects.toThrow(
    "No joke received"
  );
  });
});