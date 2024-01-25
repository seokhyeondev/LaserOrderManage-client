export class CArray<T> extends Array<T> {
  fisrt(): T {
    return this[0];
  }
  last(): T {
    return this[this.length - 1];
  }
  isEmpty(): boolean {
    return this.length === 0;
  }
  isNotEmpty(): boolean {
    return this.length > 0;
  }
}
