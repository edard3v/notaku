import Cross from "@react/components/icons/Cross";
import css from "./SearchAnimes.module.css";
import Search from "@react/components/inputs/Search/Search";
import { useStore } from "@nanostores/react";
import { search_animes_store } from "./search_animes_store";
import Btn from "@react/components/buttons/Btn/Btn";
import { useForm } from "@react/hooks/useForm";
import { search_animes_schema } from "./search_animes_schema";

export default function SearchAnimes() {
  const { is_visible } = useStore(search_animes_store.store);

  const { errors, inputs, on_submit, on_change } = useForm(search_animes_schema);

  console.log(errors);
  console.log(inputs);

  if (!is_visible) return null;
  return (
    <div className={css.search}>
      <form className={css.form} onSubmit={on_submit} onChange={on_change}>
        <Cross className={css.cross} onClick={search_animes_store.toggle_visible} />
        <Search name="title" />
        <input type="text" name="other" />
        <Btn>Buscar</Btn>
      </form>
    </div>
  );
}
