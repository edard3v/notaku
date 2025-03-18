import css from "./KeenSlider.module.css";
import { cls } from "@utils/cls";
import { useKeenSlider } from "keen-slider/react";
import React from "react";

export default function KeenSlider(props: Props) {
  const { className, children, options, ...rest } = props;

  const [container_ref, _slider] = useKeenSlider({
    slides: { perView: 1, ...options },
  });

  const cloned_children = React.Children.map(children, (child) => {
    if (!React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) return child;

    return React.cloneElement(child, {
      ...child.props,
      className: cls(["keen-slider__slide", child.props.className]),
    });
  });

  return (
    <div ref={container_ref} className={cls(["keen-slider", css.slider, className])} {...rest}>
      {cloned_children}
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
