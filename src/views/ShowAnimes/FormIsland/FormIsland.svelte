<script lang="ts">
  import Search from "@svelte/components/inputs/Search/Search.svelte";
  import Btn from "@svelte/components/buttons/Btn/Btn.svelte";
  import { z } from "astro/zod";
  import { UseForm } from "@svelte/utils/UseForm.svelte";

  const schema = z.object({
    search: z.string().min(1),
    password: z.string().min(1),
  });

  let form_island = new UseForm();
</script>

<form
  onsubmit={(e) => {
    e.preventDefault();
    form_island.validator({ form: e.target!, schema });

    if (!form_island.is_valid) return;

    console.log("fetch back");
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
    border: var(--br);
    padding: var(--xl);
    display: grid;
    gap: var(--lg);
  }
</style>
