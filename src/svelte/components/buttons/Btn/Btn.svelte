<script lang="ts">
  import Cross from "@svelte/components/icons/Cross.svelte";
  import css from "./Btn.module.css";
  import type { HTMLButtonAttributes } from "svelte/elements";

  type Props = HTMLButtonAttributes & {
    is_loading?: boolean;
    is_err?: boolean;
    class?: string;
  };

  const { is_loading, is_err, class: cls, children, ...rest }: Props = $props();
</script>

<button class={[css.btn, cls]} disabled={rest.disabled || is_loading} {...rest}>
  {#if is_loading}
    <div class={[css.loading]}></div>
  {:else if is_err && !is_loading}
    <Cross class={css.err} />
  {:else}
    {@render children?.()}
  {/if}
</button>
