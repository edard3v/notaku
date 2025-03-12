<script lang="ts">
  import Play from "@svelte/components/icons/Play.svelte";
  import css from "./LiteYoutube.module.css";
  import "@justinribeiro/lite-youtube";
  import type { HTMLAttributes } from "svelte/elements";
  import { onMount, onDestroy } from "svelte";

  type Props = HTMLAttributes<HTMLDivElement> & {
    videoid: string;
  };

  const { videoid, class: cls, ...rest }: Props = $props();
  let play: any;
  let lite: HTMLElement;

  const handle_lite = () => {
    lite.style.opacity = "1";
    play.style.backgroundColor = "transparent";
  };

  onMount(() => lite.addEventListener("liteYoutubeIframeLoaded", handle_lite));

  onDestroy(() => lite.addEventListener("liteYoutubeIframeLoaded", handle_lite));
</script>

<div class={[css.lite, cls]} {...rest}>
  <Play bind:this={play} class={css.shadow} />
  <lite-youtube bind:this={lite} class={css.lite} {videoid}></lite-youtube>
</div>
