import css from "./LiteYoutube.module.css";
import { createEffect } from "solid-js";
import "@justinribeiro/lite-youtube";
import { cls } from "@utils/cls";
import type { JSX } from "solid-js";
import Play from "@solid/components/icons/Play";

export default function LiteYoutube(props: Props) {
  let lite_youtube_ref: HTMLElement | undefined;
  let shadow_ref: SVGElement | undefined;

  createEffect(() => {
    if (lite_youtube_ref && props.video_id) {
      lite_youtube_ref.setAttribute("videoid", props.video_id);

      lite_youtube_ref.addEventListener("liteYoutubeIframeLoaded", () => {
        lite_youtube_ref.style.opacity = "1";

        if (shadow_ref) {
          shadow_ref.style.backgroundColor = "transparent";
        }
      });
    }
  });

  return (
    <div class={cls([css.lite, props.class])}>
      <Play ref={(el) => (shadow_ref = el)} class={css.shadow} />
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
