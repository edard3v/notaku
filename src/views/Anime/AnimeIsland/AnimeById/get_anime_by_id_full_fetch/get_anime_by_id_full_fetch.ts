import { JikanUrls } from "@jikan/urls";
import type { GetAnimeByIdFullFetchRes } from "./types";

export const get_anime_by_id_full_fetch = async (
  params: GetAnimeByIdFullFetchParams
): Promise<GetAnimeByIdFullFetchRes | undefined> => {
  const { signal, id } = params;

  if (!id) return;

  const res = await fetch(JikanUrls.anime_by_id_full(Number(id)), {
    signal,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new TypeError("Algo va mal con get_anime_by_id_full_fetch");
  }

  return await res.json();
};

type GetAnimeByIdFullFetchParams = {
  signal: AbortSignal;
  id?: string | null;
};
