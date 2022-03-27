declare type numberType = 'binary' | 'octal' | 'decimal' | 'hexadecimal';
interface IConverter {
    value: number | string;
    type: numberType;
    toBinary(): number;
    toOctal(): number;
    toDecimal(): number;
    toHexadecimal(): string;
}
export { IConverter, numberType };
