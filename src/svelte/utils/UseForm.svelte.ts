import type { ZodSchema } from "astro/zod";

export class UseForm {
  data: Data = $state();
  errors: Errors = $state();
  is_valid: boolean = false;

  validator(params: Params) {
    const { form, schema } = params;

    const form_data = new FormData(form as HTMLFormElement);
    const form_entries = Object.fromEntries(form_data);
    const { error, data, success } = schema.safeParse(form_entries);

    this.is_valid = success;
    this.data = data;
    this.errors = error?.issues
      .map((item) => ({ [item.path[0]]: item.message }))
      .reduce((acc, error) => {
        const key = Object.keys(error)[0];
        acc[key] = error[key];
        return acc;
      }, {});
  }
}

type Params = { form: EventTarget; schema: ZodSchema };

type Data = { [x: string]: string } | undefined;
type Errors = Data;
