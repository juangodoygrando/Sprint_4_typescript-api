import { describe, it, expect, vi } from "vitest";
import { ZodType } from "zod";
import { apiCall } from "../services/api/apicall";

describe("apiCall", () => {
  it("devuelve datos si fetch responde bien", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ joke: "hola" }),
    });

    const schema = {
      parse: vi.fn().mockReturnValue({ joke: "hola" }),
    } as unknown as ZodType<any>;

    const result = await apiCall("http://test.com", schema);

    expect(result).toEqual({ joke: "hola" });
  });
  it("devuelve undefined si fetch lanza un error", async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const schema = {
      parse: vi.fn(),
    } as any;

    const result = await apiCall("http://test.com", schema);

    expect(result).toBeUndefined();
  });

  it("Devuelve undefined si res.ok devuevle false", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });
    const schema = {
      parse: vi.fn().mockReturnValue({ joke: "hola" }),
    } as unknown as ZodType<any>;

    const result = await apiCall("http://test.com", schema);

    expect(result).toBeUndefined();
  });

  it("devuelve datos si el schema es válido", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ joke: "hola" }),
    });

    const schema = {
      parse: vi.fn(() => ({ joke: "hola" })),
    } as any;

    const result = await apiCall("http://test.com", schema);

    expect(result).toEqual({ joke: "hola" });
  });

  it("devuelve undefined si el schema falla", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ joke: "hola" }),
    });

    const schema = {
      parse: vi.fn(() => {
        throw new Error("Invalid schema");
      }),
    } as any;

    const result = await apiCall("http://test.com", schema);

    expect(result).toBeUndefined();
  });
});
