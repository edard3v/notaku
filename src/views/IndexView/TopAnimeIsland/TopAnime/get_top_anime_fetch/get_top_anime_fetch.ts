import { JikanUrls } from "@jikan/urls";
import type { GetTopAnimeFetchRes } from "./types";

export const get_top_anime_fetch = async (
  params: GetTopAnimeFetchParams
): Promise<GetTopAnimeFetchRes> => {
  const { signal } = params;

  const res = await fetch(JikanUrls.top_anime, {
    signal,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new TypeError("Algo va mal con get_top_anime_fetch");
  }

  return await res.json();
};

type GetTopAnimeFetchParams = {
  signal: AbortSignal;
};
