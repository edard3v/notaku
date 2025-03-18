import type { ZodSchema } from "astro/zod";
import { useRef, useState } from "react";

export const useForm = <T = Inputs>(schema: ZodSchema, options: Options<T>) => {
  const form_ref = useRef<HTMLFormElement>(null);
  const [inputs, setInputs] = useState<T>();
  const [errors, setErrors] = useState<T>();
  const [is_valid, setIs_valid] = useState(false);

  const subscribe = () => {
    const result = validate();
    if (!result || !result.inputs) return;

    options.success(result);
  };

  const validate = (): { inputs: T } => {
    const form_data = new FormData(form_ref.current!);
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
    setErrors(errors as T);

    return { inputs: data };
  };

  return {
    ref: form_ref,
    inputs,
    errors,
    is_valid,
    subscribe,
  };
};

type Inputs = { [x: string]: string } | undefined;

type Options<T> = {
  success: (inputs: { inputs: T }) => void;
};
