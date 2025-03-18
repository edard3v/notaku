import { JikanUrls } from "@jikan/urls";
import type { SearchAnimesFetchRes } from "./types";

export const search_animes_fetch = async (
  params: SearchAnimesFetchParams
): Promise<SearchAnimesFetchRes> => {
  const { signal, q, page = 1, limit = 25 } = params;

  const url = new URL(JikanUrls.search_animes);
  if (q) url.searchParams.set("q", q);
  if (page) url.searchParams.set("page", String(page));
  if (limit) url.searchParams.set("limit", String(limit));

  const res = await fetch(url, {
    signal,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new TypeError("Algo va mal con search_animes_fetch");
  }

  return await res.json();
};

type SearchAnimesFetchParams = {
  signal: AbortSignal;
  page?: number;
  limit?: number;
  q?: string;
};
