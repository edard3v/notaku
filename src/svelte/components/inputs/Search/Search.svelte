<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import css from "./Search.module.css";
  import { onMount } from "svelte";

  type Props = HTMLInputAttributes & {
    err?: string;
    on_search?: (txt: string) => void;
  };

  let { err, on_search, class: cls, ...rest }: Props = $props();
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
  <button class={css.lupe} onclick={handle_click}>🔍</button>
</label>
