import css from "./TopCharacters.module.css";
import { useQuery } from "@tanstack/react-query";
import Loading from "@react/components/loaders/Loading/Loading";
import ErrorComp from "@react/components/errors/ErrorComp/ErrorComp";
import { cls } from "@utils/cls";
import KeenSlider from "@react/components/shared/KeenSlider/KeenSlider";
import { get_top_characters } from "./get_top_characters_fetch/get_top_characters_fetch";

export default function TopCharacters() {
  const query = useQuery({
    queryKey: ["top_characters"],
    queryFn: get_top_characters,
  });

  const slide = query?.data?.data.map((item) => (
    <div key={item.mal_id} className={cls([css.slide])}>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <img src={item.images.webp.image_url} alt={item.name} />
      </a>
      <p>{item.nicknames.map((nick) => nick).join(", ") || item.name}</p>
    </div>
  ));

  return (
    <div className={css.top_characters}>
      {query.isError && <ErrorComp />}
      {query.isLoading && <Loading />}

      {query.isSuccess && (
        <KeenSlider options={{ perView: "auto", spacing: 4 }}>{slide}</KeenSlider>
      )}
    </div>
  );
}
