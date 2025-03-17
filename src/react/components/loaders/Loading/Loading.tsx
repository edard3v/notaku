import type { HTMLAttributes } from "react";
import css from "./Loading.module.css";
import { cls } from "@utils/cls";

export default function Loading(props: Props) {
  const { className, ...rest } = props;
  return <div {...rest} className={cls([css.loading, className])}></div>;
}

type Props = HTMLAttributes<HTMLDivElement>;
