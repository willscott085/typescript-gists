type Props = (
  | {
      onChange: () => void;
      value: string;
    }
  | {
      onChange?: undefined;
      value?: undefined;
    }
) & {
  label: string;
};

const Demo = (props: Props) => {
  return <></>;
};

const App = () => {
  return (
    <>
      {/* Invoke this component as  controlled */}
      <Demo label="my-label-string" onChange={() => {}} value="controlled" />
      {/* Invoke this component as  uncontrolled */}
      <Demo label="my-label-string" />
      {/* Mixing paradigms should error */}
      {/* @ts-expect-error */}
      <Demo label="my-label-string" value="should-error" />
      {/* Label is required for all implementations */}
      {/* @ts-expect-error */}
      <Demo />
    </>
  );
};
