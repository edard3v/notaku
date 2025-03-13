<script lang="ts">
  import Play from "@svelte/components/icons/Play.svelte";
  import css from "./LiteYoutube.module.css";
  import "@justinribeiro/lite-youtube";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLDivElement> & {
    videoid: string;
  };

  const { videoid, class: cls, ...rest }: Props = $props();

  let lite: HTMLElement;
</script>

<div class={[css.lite, cls]} {...rest}>
  <Play class={css.shadow} />
  <lite-youtube
    bind:this={lite}
    class={css.lite}
    {videoid}
    onliteYoutubeIframeLoaded={() => (lite.style.opacity = "1")}
  ></lite-youtube>
</div>
