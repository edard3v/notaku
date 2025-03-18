import "@justinribeiro/lite-youtube";
import css from "./LiteYoutube.module.css";
import { cls } from "@utils/cls";
import Play from "@react/components/icons/Play";
import { useEffect, useRef } from "react";
import type { LiteYTEmbed } from "@justinribeiro/lite-youtube";

export default function LiteYoutube(props: Props) {
  const { videoid, className, ...rest } = props;
  const lite = useRef<LiteYTEmbed>(null);

  useEffect(() => {
    if (!lite.current) return;

    const handle_lite = () => {
      lite.current?.setAttribute("style", "opacity:1;");
    };

    lite.current.addEventListener("liteYoutubeIframeLoaded", handle_lite);

    return () => {
      lite.current?.removeEventListener("some-event", handle_lite);
    };
  });

  return (
    <div className={cls([css.lite, className])} {...rest}>
      <Play className={css.shadow} />
      {/* @ts-ignore */}
      <lite-youtube ref={lite} videoid={videoid}></lite-youtube>
    </div>
  );
}
