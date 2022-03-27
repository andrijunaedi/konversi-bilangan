# konversi-bilangan

## Table of contents

- [Instalasi](#instalasi)
- [Cara penggunaan](#cara-penggunaan)
- [Parameter](#parameter)
- [Functions](#functions)
- [Examples](#examples)
- [Contributing](#contributing)
- [LICENSE](#license)

## Instalasi

- Menggunakan yarn:
  ```bash
  $ yarn add konversi-bilangan
  ```
- Menggunakan npm:
  ```bash
  $ npm install konversi-bilangan
  ```

## Cara Penggunaan

```ts
import Konversi from 'konversi-bilangan';

// Konversi desimal ke binner
console.log(new Konversi(12).toBinary()); // 1100
```

## Parameter

```ts
new Konversi(angka: number | string, type: 'binary' | 'octal' | 'decimal' | 'hexadecimal' = 'decimal')
```

- `angka` - nilai yang ingin dikonversi
- `type` - tipe angka, default `decimal`

## Functions

- `.toBinary()`
- `.toOctal()`
- `.toDecimal()`
- `.toHexadecimal()`

## Examples

- Binary ke octal
  ```ts
  console.log(new Konversi(1100, 'binary').toOctal()); // Outputs: 14
  ```
- Octal ke binary
  ```ts
  console.log(new Konversi(14, 'octal').toDecimal()); // Outputs: 12
  ```
- Binary ke hexadecimal
  ```ts
  console.log(new Konversi(12, 'decimal').toHexadecimal()); // Outputs: C
  ```
- Hexadesimal ke octal
  ```ts
  console.log(new Konversi('12D', 'hexadecimal').toBinary()); // Outputs: 100101101
  ```

## Contributing

I would love for you to contribute to `andrijunaedi/konversi-bilangan`, pull requests are welcome!

## License

The scripts and documentation in this project are released under the [MIT License](./LICENSE)
