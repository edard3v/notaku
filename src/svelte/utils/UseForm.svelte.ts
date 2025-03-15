import type { ZodSchema } from "astro/zod";

export class UseForm {
  data: Data = $state();
  errors: Errors = $state();
  is_valid: boolean = false;
  form_ref: HTMLFormElement;
  schema: ZodSchema;

  constructor(form_ref: HTMLFormElement, schema: ZodSchema) {
    this.form_ref = form_ref;
    this.schema = schema;
  }

  validator() {
    const form_data = new FormData(this.form_ref);
    const form_entries = Object.fromEntries(form_data);
    const { error, data, success } = this.schema.safeParse(form_entries);

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

type Data = { [x: string]: string } | undefined;
type Errors = Data;
