const Konversi = require('../dist');

const factoryKonversi = (angka, type) => {
  return new Konversi(angka, type);
};

describe('Binary to Decimal test', () => {
  const binaryNumber = 110011;

  test('binary to binary', () => {
    expect(factoryKonversi(binaryNumber, 'binary').toBinary()).toBe(110011);
  });
  test('110011 binary to octal = 63', () => {
    expect(factoryKonversi(binaryNumber, 'binary').toOctal()).toBe(63);
  });
  test('110011 binary to decimal = 51', () => {
    expect(factoryKonversi(binaryNumber, 'binary').toDecimal()).toBe(51);
  });
  test('11011 binary to hexadesimal = 33', () => {
    expect(factoryKonversi(binaryNumber, 'binary').toHexadecimal()).toBe('33');
  });
});
