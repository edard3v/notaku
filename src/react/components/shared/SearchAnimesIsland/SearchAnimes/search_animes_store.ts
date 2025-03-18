import { map } from "nanostores";
import type { SearchAnimesFetchRes } from "./search_animes_fetch/types";

type Store = {
  is_visible: boolean;
  animes?: SearchAnimesFetchRes;
};

const store = () => {
  const store = map<Store>({
    is_visible: false,
  });

  const is_visible = () => store.get().is_visible;

  const set_animes = (animes: SearchAnimesFetchRes) => {
    store.setKey("animes", animes);
  };

  const toggle_visible = () => {
    store.setKey("is_visible", !is_visible());
  };

  return {
    store,
    set_animes,
    toggle_visible,
  };
};

export const search_animes_store = store();
