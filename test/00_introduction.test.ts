import { describe, it, expect, vi } from "vitest";

describe("Introduction", () => {
  it("should log 'hello' into the console", () => {
    const logSpy = vi.spyOn(console, "log");

    console.log("hello");
    expect(logSpy).toHaveBeenCalledOnce();
    expect(logSpy).toBeCalledWith("hello");
  });
});
