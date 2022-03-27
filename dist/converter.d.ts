declare class Converter {
    static binaryToDecimal(binary: string): number;
    static decimalToBinary(decimal: number): number;
    static decimalToOctal(decimal: number): number;
    static decimalToHexadecimal(decimal: number): string;
    static octalToDecimal(octal: number): number;
    static hexaToDecimal(hexa: string): number;
}
export default Converter;
