import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

  it("outputs non-fizz, buzz, or fizzbuzz numbers such as 1, 2, and 4 strings", () => {
    [1, 2, 4].forEach((num) =>
      expect(typeof fizzbuzz(num) === "string").toBeTruthy()
    );
  });

  it("doesnt accept numbers less than 1 such as -1", () => {
    expect(() => fizzbuzz(-1)).toThrow("Too small");
  });

  it("does not accept numbers over 100 such as 101", () => {
    expect(() => fizzbuzz(101)).toThrow("Too large");
  });

  it("returns multiples of three such as 3, 6, 9, and 12 as fizz", () => {
    [3, 6, 9, 12]
      .map((multiple) => fizzbuzz(multiple))
      .forEach((m) => expect(m).toEqual("fizz"));
  });

  it("returns multiples of five such as 5, 10, and 20 as buzz", () => {
    [5, 10, 20]
      .map((multiple) => fizzbuzz(multiple))
      .forEach((m) => expect(m).toEqual("buzz"));
  });

  it("returns multiples of both such as 15 as fizzbuzz", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });
});
