type Steps = {
  one: string[];
  two: string[];
};

class Converter {
  static hexaEncode = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];

  public static binaryToDecimal(binary: string, debug = false): number {
    if (debug === true) {
      let result = 0;
      const steps: Steps = {
        one: [],
        two: [],
      };

      binary
        .split('')
        .reverse()
        .forEach((bit, index) => {
          steps.one.push(`(${bit} x 2^${index})`);
          steps.two.push(`${parseInt(bit, 10) * 2 ** index}`);
          result += parseInt(bit, 10) * 2 ** index;
        });
      console.log('Step 1 = ', steps.one.reverse().join(' + '));
      console.log('Step 2 = ', steps.two.reverse().join(' + '));
      console.log(`Binary (${binary}) to decimal = ${result}`);
    }

    return parseInt(binary, 2);
  }

  public static decimalToBinary(decimal: number, debug = false): number {
    if (debug === true) {
      const binary: string[] = [];
      let value = decimal;
      const table = [];

      while (value > 0) {
        const Devision = value / 2;
        const Remainder = Devision.toString().includes('.') ? 1 : 0;
        const Quotient = Math.floor(Devision);

        table.push({ 'Devision by 2': `${value} / 2`, Quotient, Remainder });
        binary.push(Remainder.toString());
        value = Quotient;
      }

      console.table(table);
      console.log(
        `Decimal (${decimal}) to binary = ${binary.reverse().join('')}`
      );
    }

    return parseInt(decimal.toString(2), 10);
  }

  public static decimalToOctal(decimal: number): number {
    return parseInt(decimal.toString(8), 10);
  }

  public static decimalToHexadecimal(decimal: number, debug = false): string {
    if (debug === true) {
      const hexa: string[] = [];
      let value = decimal;
      const table = [];

      while (value > 0) {
        const Devision = value / 16;
        const Remainder = value % 16;
        const Quotient = Math.floor(Devision);

        table.push({
          'Devision by 16': `${value} / 16`,
          Quotient,
          'Remainder (decimal)': Remainder,
          'Remainder (hexa)': Converter.hexaEncode[Remainder],
        });
        hexa.push(Converter.hexaEncode[Remainder]);
        value = Quotient;
      }

      console.table(table);
      console.log(
        `Decimal (${decimal}) to hexadecimal = ${hexa.reverse().join('')}`
      );
    }

    return decimal.toString(16).toUpperCase();
  }

  public static octalToDecimal(octal: number, debug = false): number {
    if (debug === true) {
      let result = 0;
      const steps: Steps = {
        one: [],
        two: [],
      };

      octal
        .toString()
        .split('')
        .reverse()
        .forEach((oct, index) => {
          steps.one.push(`(${oct} x 8^${index})`);
          steps.two.push(`${parseInt(oct, 10) * 8 ** index}`);
          result += parseInt(oct, 10) * 8 ** index;
        });

      console.log('Step 1 = ', steps.one.reverse().join(' + '));
      console.log('Step 2 = ', steps.two.reverse().join(' + '));
      console.log(`Octal (${octal}) to decimal = ${result}`);
    }
    return parseInt(octal.toString(), 8);
  }

  public static hexaToDecimal(hexa: string, debug = false): number {
    if (debug === true) {
      let result = 0;
      const steps: Steps = {
        one: [],
        two: [],
      };

      hexa
        .split('')
        .reverse()
        .forEach((hex, index) => {
          const value = Converter.hexaEncode.indexOf(hex) * 16 ** index;

          steps.one.push(
            `(${Converter.hexaEncode.indexOf(hex)} x 16^${index})`
          );
          steps.two.push(`${value}`);
          result += value;
        });
      console.log('Step 1 = ', steps.one.reverse().join(' + '));
      console.log('Step 2 = ', steps.two.reverse().join(' + '));
      console.log(`Hexadecimal (${hexa}) to decimal = ${result}`);
    }

    return parseInt(hexa.toLocaleLowerCase(), 16);
  }
}

export default Converter;
