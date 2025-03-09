import css from "./LiteYoutube.module.css";
import { createEffect, onMount } from "solid-js";
import "@justinribeiro/lite-youtube";
import { cls } from "@utils/cls";
import type { JSX } from "solid-js";

export default function LiteYoutube(props: Props) {
  let lite_youtube_ref: HTMLElement | undefined;

  createEffect(() => {
    if (lite_youtube_ref && props.video_id) {
      lite_youtube_ref.setAttribute("videoid", props.video_id);
    }
  });

  onMount(() => {
    console.log("oe");
  });

  return (
    <div class={cls([css.lite, props.class])}>
      <lite-youtube ref={lite_youtube_ref}></lite-youtube>
    </div>
  );
}

interface Props extends JSX.HTMLAttributes<HTMLElement> {
  video_id: string;
}

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "lite-youtube": any;
    }
  }
}
