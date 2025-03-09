export const get_anime_id = () => {
  const href = new URL(window.location.href);
  const anime_id = href.searchParams.get("id");

  return anime_id;
};
