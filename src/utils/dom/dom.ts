export class Dom {
  static select(id: string): HTMLElement | null {
    const element = document.querySelector(`#${id}`);
    return element as HTMLElement;
  }
}
