export interface SearchAnimesFetchRes {
  pagination: Pagination;
  data: Data[];
}

interface Data {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: null | string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: null | string;
  year: number | null;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: any[];
  themes: Demographic[];
  demographics: Demographic[];
}

interface Aired {
  from: Date | null;
  to: Date | null;
  prop: Prop;
  string: string;
}

interface Prop {
  from: From;
  to: From;
}

interface From {
  day: number | null;
  month: number | null;
  year: number | null;
}

interface Broadcast {
  day: null | string;
  time: null | string;
  timezone: null | string;
  string: null | string;
}

interface Demographic {
  mal_id: number;
  type: Type;
  name: string;
  url: string;
}

enum Type {
  Anime = "anime",
}

interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Title {
  type: string;
  title: string;
}

interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Images;
}

interface Images {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
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
