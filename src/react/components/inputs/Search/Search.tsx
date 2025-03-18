import React, { useEffect, useRef } from "react";
import css from "./Search.module.css";
import { cls } from "@utils/cls";
import Loading from "@react/components/icons/Loading";
import Success from "@react/components/icons/Success";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  err?: string;
  is_loading?: boolean;
  is_success?: boolean;
};

export default function Search(props: Props) {
  const { err, is_loading, is_success, className, placeholder = "Buscar", ...rest } = props;

  const input_ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input_ref.current?.focus();
  }, []);

  return (
    <label className={cls([css.search, className])}>
      <input
        {...rest}
        ref={input_ref}
        type="text"
        className={cls([err && css.input_err])}
        title={err}
        placeholder={placeholder}
      />

      {is_loading && <Loading className={css.loading} />}
      {is_success && <Success className={css.success} />}
    </label>
  );
}
