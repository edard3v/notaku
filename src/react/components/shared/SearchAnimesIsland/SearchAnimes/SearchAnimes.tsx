import Cross from "@react/components/icons/Cross";
import css from "./SearchAnimes.module.css";
import Search from "@react/components/inputs/Search/Search";
import { useStore } from "@nanostores/react";
import { search_animes_store } from "./search_animes_store";
import Btn from "@react/components/buttons/Btn/Btn";

export default function SearchAnimes() {
  const { is_visible } = useStore(search_animes_store.store);

  if (!is_visible) return null;
  return (
    <div className={css.search}>
      <form
        className={css.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
          console.log(e.target);
        }}
      >
        <Cross className={css.cross} onClick={search_animes_store.toggle_visible} />
        <Search />
        <Btn>Buscar</Btn>
      </form>
    </div>
  );
}
