export interface GetTopCharactersFetchRes {
  pagination: Pagination;
  data: Data[];
}

interface Data {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
}

interface Images {
  jpg: Jpg;
  webp: Webp;
}

interface Jpg {
  image_url: string;
}

interface Webp {
  image_url: string;
  small_image_url: string;
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

interface Items {
  count: number;
  total: number;
  per_page: number;
}
