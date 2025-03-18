# useForm

- Ejecuta y pasa un schema de zod y un objeto con un success
- success es una fn que se ejecutará si el form es valido e irá cargada con objeto que tendrá los inputs
- Si desea que llegue tipado el objeto con inputs envie un generico a useForm

```
useForm<T>()
```

- Enlace la ref que returna useForm a su formulario
- Se require poner un name a c/input para registrarlo (No hay soporte para registrar inputs con el mismo name)
- Con la fn subscribe() que retorna useForm puede suscribirse al metodo que guste.

```ts
export default function Component() {
  const form = useForm<Schema>(schema, {
    success({ inputs }) {
      console.log(inputs.title);
    },
  });

  return (
    <div className={css.search}>
      <form
        className={css.form}
        ref={form.ref}
        onChange={form.subscribe}
        onSubmit={(e) => {
          e.preventDefault();
          form.subscribe();
        }}
      >
        <Search name="title" err={form.errors?.title} />

        <Btn>Buscar</Btn>
      </form>
    </div>
  );
}
```
