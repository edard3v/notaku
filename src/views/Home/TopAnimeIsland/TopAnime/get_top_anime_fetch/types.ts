export interface GetTopAnimeFetchRes {
  pagination: Pagination;
  data: Data[];
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

interface Data {
  mal_id: number;
  url: string;
  images: { jpg: Image; webp: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: DatumType;
  source: string;
  episodes: number;
  status: Status;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: Rating;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: Season | null;
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
  from: Date;
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
  timezone: Timezone | null;
  string: null | string;
}

enum Timezone {
  AsiaTokyo = "Asia/Tokyo",
}

interface Demographic {
  mal_id: number;
  type: DemographicType;
  name: string;
  url: string;
}

enum DemographicType {
  Anime = "anime",
}

interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

enum Rating {
  PG13Teens13OrOlder = "PG-13 - Teens 13 or older",
  R17ViolenceProfanity = "R - 17+ (violence & profanity)",
  RMildNudity = "R+ - Mild Nudity",
}

enum Season {
  Fall = "fall",
  Spring = "spring",
  Summer = "summer",
  Winter = "winter",
}

enum Status {
  FinishedAiring = "Finished Airing",
}

interface Title {
  type: TitleType;
  title: string;
}

enum TitleType {
  Default = "Default",
  English = "English",
  French = "French",
  German = "German",
  Japanese = "Japanese",
  Spanish = "Spanish",
  Synonym = "Synonym",
}

interface Trailer {
  youtube_id: null | string;
  url: null | string;
  embed_url: null | string;
  images: Images;
}

interface Images {
  image_url: null | string;
  small_image_url: null | string;
  medium_image_url: null | string;
  large_image_url: null | string;
  maximum_image_url: null | string;
}

enum DatumType {
  Movie = "Movie",
  Ova = "OVA",
  TVSpecial = "TV Special",
  Tv = "TV",
}

interface Items {
  count: number;
  total: number;
  per_page: number;
}
