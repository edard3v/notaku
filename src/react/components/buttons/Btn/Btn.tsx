import { cls } from "@utils/cls";
import css from "./Btn.module.css";
import Cross from "@react/components/icons/Cross";
import Loading from "@react/components/icons/Loading";

export default function Btn(props: Props) {
  const { className, children, loading, err, disabled, ...rest } = props;

  return (
    <button {...rest} className={cls([css.btn, className])} disabled={disabled || loading}>
      {loading && <Loading width={20} height={20} />}
      {err && !loading && !disabled && <Cross className={css.err} width={20} height={20} />}
      {!loading && children}
    </button>
  );
}

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  err?: boolean;
};
