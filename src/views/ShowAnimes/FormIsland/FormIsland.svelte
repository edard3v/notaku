<script lang="ts">
  import Search from "@svelte/components/inputs/Search/Search.svelte";
  import Btn from "@svelte/components/buttons/Btn/Btn.svelte";
  import { z } from "astro/zod";
  import { UseForm } from "@svelte/utils/UseForm.svelte";
  import { onMount } from "svelte";

  let form_island = $state<UseForm>();

  let form_ref: HTMLFormElement;

  const schema = z.object({
    search: z.string().min(1),
    password: z.string().min(1),
  });

  onMount(() => {
    form_island = new UseForm(form_ref, schema);
  });
</script>

<form
  bind:this={form_ref}
  onchange={() => form_island?.validator()}
  onsubmit={(e) => {
    e.preventDefault();
    form_island?.validator();
    if (!form_island?.is_valid) return;
  }}
>
  <Search name="search" err={form_island?.errors?.search} />
  <input type="password" name="password" placeholder="Contraseña" />

  <Btn>Enviar</Btn>
</form>

<style>
  form {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding: var(--xl);
    display: grid;
    gap: var(--lg);
  }
</style>
