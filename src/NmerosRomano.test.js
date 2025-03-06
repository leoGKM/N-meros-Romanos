import conversor from "./NumRomano.js";

describe("Sumar", () => {
  it("deberia devolver I si se ingresa 1", () => {
    expect(conversor(1)).toEqual("I");
  });
  it("debería convertir 2 a II", () => {
    expect(conversor(2)).toEqual("II");
  });
  it("debería convertir 3 a III", () => {
  expect(conversor(3)).toEqual("III");
  });
  it("debería convertir 4 a IV", () => {
    expect(conversor(4)).toEqual("IV");
  });
  it("debería convertir 5 a V", () => {
    expect(conversor(5)).toEqual("V");
  });
  it("debería convertir 9 a IX", () => {
    expect(conversor(9)).toEqual("IX");
  });
  it("debería convertir 10 a X", () => {
    expect(conversor(10)).toEqual("X");
  });
  it("debería convertir 39 a XXXIX", () => {
    expect(conversor(39)).toEqual("XXXIX");
  });
  it("debería convertir 49 a XLIX", () => {
    expect(conversor(49)).toEqual("XLIX");
  });
  it("debería convertir 59 a LIX", () => {
    expect(conversor(59)).toEqual("LIX");
  });
  it("debería convertir 99 a XCIX", () => {
    expect(conversor(99)).toEqual("XCIX");
  });
  it("debería convertir 399 a CCCXCIX", () => {
    expect(conversor(399)).toEqual("CCCXCIX");
  });
  it("debería convertir 499 a CDXCIX", () => {
    expect(conversor(499)).toEqual("CDXCIX");
  });
  it("debería convertir 500 a D", () => {
    expect(conversor(500)).toEqual("D");
  });
});