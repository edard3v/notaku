import { atom } from "nanostores";

export const search_animes_store = atom(false);

export const search_animes_store_toggle = () => search_animes_store.set(!search_animes_store.get());
