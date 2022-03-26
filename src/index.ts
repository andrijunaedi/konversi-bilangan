import Converter from './converter';
import { IConverter, numberType } from './interface';

class konversi implements IConverter {
  constructor(
    public value: number | string,
    public type: numberType = 'decimal'
  ) {
    this.value = value;
    this.type = type;
  }

  toBinary(): number {
    let decimal = 0;
    const value = this.value.toString();

    switch (this.type) {
      case 'binary':
        return parseInt(value, 10);
      case 'octal':
        decimal = Converter.octalToDecimal(parseInt(value, 10));
        return Converter.decimalToBinary(decimal);
      case 'hexadecimal':
        decimal = Converter.hexaToDecimal(value);
        return Converter.decimalToBinary(decimal);
      default:
        return parseInt(this.value.toString(2), 10);
    }
  }

  toOctal(): number {
    let decimal = 0;
    const value = this.value.toString();

    switch (this.type) {
      case 'binary':
        decimal = Converter.binaryToDecimal(value);
        return Converter.decimalToOctal(decimal);
      case 'octal':
        return parseInt(value, 10);
      case 'hexadecimal':
        decimal = Converter.hexaToDecimal(value);
        return Converter.decimalToOctal(decimal);
      default:
        return Converter.decimalToOctal(parseInt(value, 10));
    }
  }

  toDecimal(): number {
    const value = this.value.toString();

    switch (this.type) {
      case 'binary':
        return Converter.binaryToDecimal(value);
      case 'octal':
        return Converter.octalToDecimal(parseInt(value, 10));
      case 'hexadecimal':
        return Converter.hexaToDecimal(value);
      default:
        return parseInt(value, 10);
    }
  }

  toHexadecimal(): string {
    let decimal = 0;
    const value = this.value.toString();

    switch (this.type) {
      case 'binary':
        decimal = Converter.binaryToDecimal(value);
        return Converter.decimalToHexadecimal(decimal);
      case 'octal':
        decimal = Converter.octalToDecimal(parseInt(value, 10));
        return Converter.decimalToHexadecimal(decimal);
      case 'hexadecimal':
        return value;
      default:
        decimal = Converter.hexaToDecimal(value);
        return Converter.decimalToHexadecimal(parseInt(value, 10));
    }
  }
}

export default konversi;
