# Template Astro hecho por edard3v

- Uso screamming. Por ende pages se limita a crear rutas y views se encarga de encapsular lo que corresponde en c/u.

- Actualizar todas las dependencias sin respetar las restricciones de versión en package.json

```bash
bun update --latest
```

- TanStackQuery con:

  - React

    ```
    bun i -E -D @tanstack/react-query-devtools
    bun i -E @tanstack/react-query @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
    ```

  - Svelte

    ```
    bun i -E -D @tanstack/svelte-query-devtools
    bun i -E @tanstack/svelte-query @tanstack/query-sync-storage-persister @tanstack/svelte-query-persist-client
    ```

- Nanostores

```
bun i -E nanostores
```

- Felte (Gestión de forms) https://felte.dev/docs

```
bun i -E felte
bun i -E @felte/validator-zod
```

- lite-youtube

```
bun i -E @justinribeiro/lite-youtube
```
