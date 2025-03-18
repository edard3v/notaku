import { cls } from "@utils/cls";
import css from "./ErrorComp.module.css";

export default function ErrorComp(props: Props) {
  const { className, ...rest } = props;

  return (
    <div {...rest} className={cls([css.err_comp, className])}>
      Error 😱
    </div>
  );
}

type Props = React.HTMLAttributes<HTMLDivElement>;
