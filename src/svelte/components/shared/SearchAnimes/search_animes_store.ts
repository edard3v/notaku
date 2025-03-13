import { map } from "nanostores";

export const search_animes_store = map({
  is_visible: false,
});

export const search_animes_store_toggle_is_visible = () => {
  const store = search_animes_store.get();
  search_animes_store.setKey("is_visible", !store.is_visible);
};
