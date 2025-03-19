import { JikanUrls } from "@jikan/urls";
import type { GetTopCharactersFetchRes } from "./types";

export const get_top_characters = async (
  params: GetTopCharactersFetchParams
): Promise<GetTopCharactersFetchRes> => {
  const { signal } = params;

  const res = await fetch(JikanUrls.top_characters, {
    signal,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new TypeError("Algo va mal con get_top_characters_fetch");
  }

  return await res.json();
};

type GetTopCharactersFetchParams = {
  signal: AbortSignal;
};
