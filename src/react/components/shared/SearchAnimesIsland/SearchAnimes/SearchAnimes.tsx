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

  const { form, errors, subscribe } = useForm(search_animes_schema, {
    success(inputs) {
      // Solo entrego la data si cumple las validaciones de zod y llega tipada
      console.log(inputs);
      // ...fetch aquí
    },
  });

  if (!is_visible) return null;
  return (
    <div className={css.search}>
      <form
        ref={form}
        className={css.form}
        // suscribes/validas en los eventos que desees
        onChange={subscribe}
        onSubmit={(e) => {
          e.preventDefault();
          subscribe();
        }}
      >
        <Cross className={css.cross} onClick={search_animes_store.toggle_visible} />
        <Search name="title" err={errors?.title} />

        <Btn>Buscar</Btn>
      </form>
    </div>
  );
}
