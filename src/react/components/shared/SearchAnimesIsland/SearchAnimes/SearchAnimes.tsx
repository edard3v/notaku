import Cross from "@react/components/icons/Cross";
import css from "./SearchAnimes.module.css";
import Search from "@react/components/inputs/Search/Search";
import { useStore } from "@nanostores/react";
import { search_animes_store } from "./search_animes_store";
import { useForm } from "@react/hooks/use_form/useForm";
import { search_animes_schema, type SearchAnimesSchema } from "./search_animes_schema";

export default function SearchAnimes() {
  const { is_visible } = useStore(search_animes_store.store);

  const form = useForm<SearchAnimesSchema>(search_animes_schema, {
    success({ inputs }) {
      console.log(inputs.title);
    },
  });

  if (!is_visible) return null;
  return (
    <div className={css.search}>
      <form
        ref={form.ref}
        className={css.form}
        onChange={form.subscribe}
        onSubmit={(e) => {
          e.preventDefault();
          form.subscribe();
        }}
      >
        <Cross className={css.cross} onClick={search_animes_store.toggle_visible} />
        <Search name="title" err={form.errors?.title} />
      </form>
    </div>
  );
}
