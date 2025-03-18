import { cls } from "@utils/cls";
import css from "./Password.module.css";
import { useState, type InputHTMLAttributes } from "react";

export default function Password(props: Props) {
  const { className, err, ...rest } = props;
  const [is_visible_pass, set_is_visible_pass] = useState(false);
  return (
    <label className={cls([css.password, className])}>
      <input
        {...rest}
        type={!is_visible_pass ? "password" : "text"}
        placeholder="Contraseña"
        className={cls([err && css.input_err])}
        title={err}
      />
      <span className={css.emoji} onClick={() => set_is_visible_pass(!is_visible_pass)}>
        {!is_visible_pass ? "😵" : "🧐"}
      </span>
    </label>
  );
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  err?: string;
}
