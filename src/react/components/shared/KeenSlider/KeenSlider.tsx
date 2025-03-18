import css from "./KeenSlider.module.css";
import { cls } from "@utils/cls";
import { useKeenSlider } from "keen-slider/react";
import React from "react";

export default function KeenSlider(props: Props) {
  const { className, children, options } = props;

  const [container_ref, _slider] = useKeenSlider({
    slides: { perView: 1, ...options },
  });

  return (
    <div ref={container_ref} className={cls(["keen-slider", css.slider, className])}>
      {children}
    </div>
  );
}

type Props = React.HTMLAttributes<HTMLDivElement> & {
  options?: SlidesOption;
};

type SlidesOption = {
  origin?: "auto" | "center" | number;
  number?: number | (() => number | null) | null;
  perView?: number | "auto" | (() => number | "auto");
  spacing?: number | (() => number);
};

export const KSS = "keen-slider__slide";
