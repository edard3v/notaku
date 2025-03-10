import css from "./Btn.module.css";
import Cross from "@solid/components/icons/Cross";
import { cls } from "@utils/cls";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

export default function Btn(props: Props) {
  const [p, rest] = splitProps(props, ["class", "children", "is_loading", "is_err", "disabled"]);

  return (
    <button {...rest} class={cls([css.btn, p.class])} disabled={p.disabled || p.is_loading}>
      {!p.is_loading && p.children}

      {p.is_loading && <div class={css.loading}></div>}

      {p.is_err && !p.is_loading && !p.disabled && <Cross class={css.err} />}
    </button>
  );
}

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  is_loading?: boolean;
  is_err?: boolean;
}
