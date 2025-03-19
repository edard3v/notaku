import Cross from "@react/components/icons/Cross";
import css from "./SearchAnimes.module.css";
import Search from "@react/components/inputs/Search/Search";
import { useStore } from "@nanostores/react";
import { search_animes_store } from "./search_animes_store";
import { useForm } from "@react/hooks/use_form/useForm";
import { search_animes_schema, type SearchAnimesSchema } from "./search_animes_schema";
import { useQuery } from "@tanstack/react-query";
import { search_animes_fetch } from "./search_animes_fetch/search_animes_fetch";
import { useEffect, useState } from "react";
import { navigate } from "astro:transitions/client";
import { ANIMES } from "@views/AnimesView/config";

export default function SearchAnimes() {
  const { is_visible } = useStore(search_animes_store.store);
  const [title, setTitle] = useState("");

  const query = useQuery({
    queryKey: ["search_animes", { title }],
    queryFn: ({ signal }) => search_animes_fetch({ signal, q: title }),
    enabled: !!title,
  });

  const form = useForm<SearchAnimesSchema>(search_animes_schema, {
    success({ inputs }) {
      setTitle(inputs.title.toLocaleLowerCase());
    },
  });

  useEffect(() => {
    if (!query.isSuccess) return;
    search_animes_store.set_animes(query.data);
    navigate(ANIMES.href);
  }, [query.isSuccess]);

  if (!is_visible) return null;
  return (
    <div className={css.search}>
      <form
        ref={form.ref}
        className={css.form}
        onSubmit={(e) => {
          e.preventDefault();
          form.subscribe();
        }}
      >
        <Cross className={css.cross} onClick={search_animes_store.toggle_visible} />
        <Search name="title" err={form.errors?.title} is_loading={query.isLoading} />
      </form>
    </div>
  );
}
