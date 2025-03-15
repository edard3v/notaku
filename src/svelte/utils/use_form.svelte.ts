import type { ZodSchema } from "astro/zod";

export const use_form = (params?: Params) => {
  const form_state: FormState = { data: undefined, errors: undefined };
  if (!params) return form_state;

  const { form, schema } = params;

  const form_data = new FormData(form as HTMLFormElement);
  const form_entries = Object.fromEntries(form_data);

  const { error, data } = schema.safeParse(form_entries);

  form_state.data = data;
  form_state.errors = error?.issues
    .map((item) => ({ [item.path[0]]: item.message }))
    .reduce((acc, error) => {
      const key = Object.keys(error)[0];
      acc[key] = error[key];
      return acc;
    }, {});

  return form_state;
};

type Params = { form: EventTarget; schema: ZodSchema };

type FormState = {
  data: { [x: string]: string } | undefined;
  errors: { [x: string]: string } | undefined;
};
