import { atom } from "nanostores";

class SearchAnimesStore {
  #is_visible = atom(false);

  toggle_visible() {
    this.#is_visible.set(!this.#is_visible.get());
  }

  public get is_visible() {
    return this.#is_visible.get();
  }
}

export const search_animes_store = new SearchAnimesStore();
