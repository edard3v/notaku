import type { ZodSchema } from "astro/zod";
import { useRef, useState } from "react";

export const useForm = (schema: ZodSchema, options: Options) => {
  const form_ref = useRef<HTMLFormElement>(null);
  const [inputs, setInputs] = useState<Inputs>();
  const [errors, setErrors] = useState<Errors>();
  const [is_valid, setIs_valid] = useState(false);

  const subscribe = () => {
    const result = validate();
    if (!result?.is_valid) return;
    options.success(result.inputs);
  };

  const validate = (): Validate => {
    if (!form_ref.current) return;
    const form_data = new FormData(form_ref.current);
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

    return { inputs: data, is_valid: success };
  };

  return {
    form: form_ref,
    inputs,
    errors,
    is_valid,
    subscribe,
  };
};

type Inputs = { [x: string]: string } | undefined;
type Errors = Inputs;

type Options = {
  success: (inputs: Inputs) => void;
};

type Validate = { inputs: Inputs; is_valid: boolean } | undefined;
