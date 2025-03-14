<script lang="ts">
  import Search from "@svelte/components/inputs/Search/Search.svelte";
  import Btn from "@svelte/components/buttons/Btn/Btn.svelte";
</script>

<form>
  <Search name="search" />
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
