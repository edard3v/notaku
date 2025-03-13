import { JikanUrls } from "@jikan/urls";

export const search_animes_fetch = async (params: SearchAnimesFetchParams): Promise<any> => {
  const { signal } = params;

  const res = await fetch(JikanUrls.search_animes, {
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
