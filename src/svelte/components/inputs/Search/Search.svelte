<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import css from "./Search.module.css";
  import { onMount } from "svelte";
  import Loading from "@svelte/components/icons/Loading.svelte";
  import Success from "@svelte/components/icons/Success.svelte";

  type Props = HTMLInputAttributes & {
    is_err?: string;
    is_loading?: boolean;
    is_success?: boolean;
    on_search?: (txt: string) => void;
  };

  let { is_err: err, on_search, is_loading, is_success, class: cls, ...rest }: Props = $props();
  let input_ref: HTMLInputElement;

  onMount(() => {
    input_ref.focus();
  });

  function handle_enter(event: KeyboardEvent) {
    if (!on_search) return;
    if (event.key === "Enter") {
      on_search(input_ref.value);
    }
  }

  function handle_click() {
    if (!on_search) return;
    if (input_ref) {
      on_search(input_ref.value);
    }
  }
</script>

<label class={[css.search, cls]}>
  <input
    bind:this={input_ref}
    {...rest}
    type="text"
    class={[err && css.input_err]}
    title={err}
    onkeydown={handle_enter}
  />
  {#if is_loading}
    <Loading class={css.loading} />
  {:else if is_success}
    <Success class={css.success} />
  {:else}
    <button class={css.lupe} onclick={handle_click}>🔍️</button>
  {/if}
</label>
