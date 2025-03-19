import { map } from "nanostores";
import type { SearchAnimesFetchRes } from "./search_animes_fetch/types";

type Store = {
  is_visible: boolean;
  animes?: SearchAnimesFetchRes;
  title: string;
};

const store = () => {
  const store = map<Store>({
    is_visible: false,
    title: "",
  });

  const set_title = (title: string) => {
    store.setKey("title", title);
  };

  const set_animes = (animes: SearchAnimesFetchRes) => {
    store.setKey("animes", animes);
  };

  const set_visible = (value: boolean) => {
    store.setKey("is_visible", value);
  };

  const toggle_visible = () => {
    store.setKey("is_visible", !store.get().is_visible);
  };

  return {
    store,
    set_title,
    set_visible,
    set_animes,
    toggle_visible,
  };
};

export const search_animes_store = store();
