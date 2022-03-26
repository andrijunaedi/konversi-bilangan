class Converter {
  public static binaryToDecimal(binary: string): number {
    return parseInt(binary, 2);
  }

  public static decimalToBinary(decimal: number): number {
    return parseInt(decimal.toString(2), 10);
  }

  public static decimalToOctal(decimal: number): number {
    return parseInt(decimal.toString(8), 10);
  }

  public static decimalToHexadecimal(decimal: number): string {
    return decimal.toString(16).toUpperCase();
  }

  public static octalToDecimal(octal: number): number {
    return parseInt(octal.toString(), 8);
  }

  public static hexaToDecimal(hexa: string): number {
    return parseInt(hexa.toLocaleLowerCase(), 16);
  }
}

export default Converter;
