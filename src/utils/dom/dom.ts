export class Dom {
  static select(id: string): HTMLElement | null {
    const element = document.querySelector(`#${id}`);
    if (!element) return null;
    return element as HTMLElement;
  }
}
