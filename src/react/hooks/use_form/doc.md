# useForm

- ejecuta y pasa un schema de zod y un objeto con un success
- success una fn que se ejecutará si el form es valido e irá cargada con objeto que tendrá los inputs
- si desea que llegue tipada la data envie un generico a useForm

```
useForm<T>()
```

- enlace la ref que return useForm a su formulario
- se require poner un name a c/input para registrarlo (No hay soporte para registrar inputs con el mismo name)
- con la fn subscribe() que return useForm puede suscribirse al metodo que guste.

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
