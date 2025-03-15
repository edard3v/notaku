import type { ZodSchema } from "astro/zod";

export const form_validator = ({ form, schema }: Params) => {
  const form_data = new FormData(form as HTMLFormElement);
  const form_entries = Object.fromEntries(form_data);

  console.log(form_entries);

  const { error, data } = schema.safeParse(form_entries);

  const form_state: FormState = { data: {}, errors: {} };

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

export type FormState = {
  data: { [x: string]: string } | undefined;
  errors: { [x: string]: string } | undefined;
};
