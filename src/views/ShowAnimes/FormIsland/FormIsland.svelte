<script lang="ts">
  import Search from "@svelte/components/inputs/Search/Search.svelte";
  import Btn from "@svelte/components/buttons/Btn/Btn.svelte";
  import { z } from "astro/zod";
  import { use_form } from "@svelte/utils/use_form.svelte";

  const schema = z.object({
    search: z.string().min(1),
    password: z.string().min(1),
  });

  let form_island = $state(use_form());
</script>

<form
  onsubmit={(e) => {
    e.preventDefault();
    form_island = use_form({ form: e.target!, schema });

    if (form_island.errors) return;

    console.log("fetch back");
  }}
>
  <Search name="search" err={form_island?.errors?.search} />
  <input type="password" name="password" placeholder="Contraseña" />
  <select>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
  <Btn>Enviar</Btn>
</form>

<style>
  form {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    border: var(--br);
    padding: var(--xl);
    display: grid;
    gap: var(--lg);
  }
</style>
