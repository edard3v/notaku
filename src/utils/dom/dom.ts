export class Dom {
  static select(id: string) {
    return document.querySelector(`#${id}`);
  }
}
