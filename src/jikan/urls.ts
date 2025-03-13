export class JikanUrls {
  static base_url = "https://api.jikan.moe/v4";
  static top_anime = `${this.base_url}/top/anime`;
  static anime_by_id_full = (id: number) => `${this.base_url}/anime/${id}/full`;
  static search_animes = `${this.base_url}/anime`;
}
