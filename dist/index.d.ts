import { IConverter, numberType } from './interface';
declare class Konversi implements IConverter {
    value: number | string;
    type: numberType;
    constructor(value: number | string, type?: numberType);
    toBinary(): number;
    toOctal(): number;
    toDecimal(): number;
    toHexadecimal(): string;
}
export default Konversi;
