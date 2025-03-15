<script lang="ts">
  import Search from "@svelte/components/inputs/Search/Search.svelte";
  import Btn from "@svelte/components/buttons/Btn/Btn.svelte";
  import { form_validator, type FormState } from "@svelte/utils/form_validator.svelte";
  import { z } from "astro/zod";

  const schema = z.object({
    search: z.string().min(1),
    password: z.string().url(),
  });

  let rune: FormState = $state({ data: undefined, errors: undefined });
</script>

<form
  onsubmit={(e) => {
    e.preventDefault();
    rune = form_validator({ form: e.target!, schema });

    if (rune.errors) return;

    // here init fetch backend

    console.log("fetch----");
  }}
>
  <Search name="search" err={rune?.errors?.search} />
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
