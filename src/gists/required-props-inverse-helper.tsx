import { ChangeEventHandler } from "react";

/**
 * Let's write a helper to ease the pain
 * of writing this type.
 */
type InputPropsLame = (
  | { value: string; onChange: ChangeEventHandler }
  | { value?: undefined; onChange?: undefined }
) & { label: string };

type AllOrNothing<T extends Record<string, unknown>> =
  | { [K in keyof T]: T[K] }
  | { [K in keyof T]?: undefined };

type AllOrNothingAlternative<T extends Record<string, unknown>> =
  | T
  | Partial<Record<keyof T, undefined>>;

type InputProps = AllOrNothing<{
  value: string;
  onChange: ChangeEventHandler;
}> & { label: string };

type InputPropsAlternative = AllOrNothingAlternative<{
  value: string;
  onChange: ChangeEventHandler;
}> & { label: string };

const Input = (props: InputProps) => {
  return <input {...props} />;
};

export const Test = () => {
  return (
    <div>
      <Input label="label" value="value" onChange={(e) => {}} />
      <Input label="label" />

      {/* @ts-expect-error */}
      <Input label="label" value="value" />

      {/* @ts-expect-error */}
      <Input label="label" onChange={() => {}} />
    </div>
  );
};
