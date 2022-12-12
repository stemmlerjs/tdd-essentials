import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

  it("outputs non-fizz, buzz, or fizzbuzz numbers as strings", () => {
    [1, 2, 4].forEach((num) =>
      expect(typeof fizzbuzz(num) === "string").toBeTruthy()
    );
  });

  it("doesnt accept numbers less than 1", () => {
    expect(() => fizzbuzz(-1)).toThrow("Too small");
  });

  it("accepts numbers from 1 to 100", () => {
    expect(() => fizzbuzz(101)).toThrow("Too large");
  });

  it("returns multiples of three as fizz", () => {
    [3, 6, 9, 12]
      .map((multiple) => fizzbuzz(multiple))
      .forEach((m) => expect(m).toEqual("fizz"));
  });

  it("returns multiples of five as buzz", () => {
    [5, 10, 20]
      .map((multiple) => fizzbuzz(multiple))
      .forEach((m) => expect(m).toEqual("buzz"));
  });

  it("returns multiples of both as fizzbuzz", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });
});
