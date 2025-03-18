import type { ZodSchema } from "astro/zod";
import { useState } from "react";

export const useForm = (schema: ZodSchema) => {
  const [inputs, setInputs] = useState<Inputs>();
  const [errors, setErrors] = useState<Errors>();
  const [is_valid, setIs_valid] = useState(false);

  const on_submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    update(form);
  };

  const on_change = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    update(form);
  };

  const update = (form: HTMLFormElement) => {
    const form_data = new FormData(form);
    const form_entries = Object.fromEntries(form_data);
    const { error, data, success } = schema.safeParse(form_entries);

    setIs_valid(success);
    setInputs(data);

    const errors = error?.issues
      .map((item) => ({ [item.path[0]]: item.message }))
      .reduce((acc, error) => {
        const key = Object.keys(error)[0];
        acc[key] = error[key];
        return acc;
      }, {});
    setErrors(errors);
  };

  return {
    inputs,
    errors,
    is_valid,
    on_submit,
    on_change,
  };
};

type Inputs = { [x: string]: string } | undefined;
type Errors = Inputs;
