type Props = {
  variant: {};
};

const Demo = (props: Props) => {
  return <>{props.variant}</>;
};

/**
 *
 *  the {} type in typescript represent everthing
 *  that is not null or undefined
 *
 **/
const App = () => {
  return (
    <>
      <Demo variant={"string"} />
      <Demo variant={true} />
      <Demo variant={{ test: true }} />
      <Demo
        // @ts-expect-error
        variant={null}
      />
      <Demo
        // @ts-expect-error
        variant={undefined}
      />
    </>
  );
};

const example1: {} = "str";
const example2: {} = 123;
const example3: {} = true;
const example4: {} = {
  foo: "whatever",
};
// @ts-expect-error
const example5: {} = null;
// @ts-expect-error
const example6: {} = undefined;

function try_passing_null(not_null: {}) {}

// @ts-expect-error
try_passing_null(null);
