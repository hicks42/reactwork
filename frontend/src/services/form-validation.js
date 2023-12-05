export class ValidatorService {
  static min(value, min) {
    if (value.length < min) {
      return `${min} caractere minimum`;
    }
  }
  static max(value, max) {
    if (value.length > max) {
      return `${max} caractere maximum`;
    }
  }
}
