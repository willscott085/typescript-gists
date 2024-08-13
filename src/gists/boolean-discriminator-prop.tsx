// A boolean prop determines a certain shape in a react component
import React from "react";

type Props =
  | {
      isCodeSandBox: true;
      codeSandBoxId: string;
    }
  | {
      isCodeSandBox?: false;
      stackBlitzId: string;
    };

export const EmbeddedReplPlayground = (props: Props) => {
  if (props.isCodeSandBox) {
    return (
      <iframe src={`https://codesandbox.io/embed/${props.codeSandBoxId}`} />
    );
  }

  return <iframe src={`https://stackblitz.com/edit/${props.stackBlitzId}`} />;
};

const App = () => {
  return (
    <div>
      <EmbeddedReplPlayground
        isCodeSandBox
        // @ts-expect-error
        stackBlitzId="my-stackblitz-id"
      />
      <EmbeddedReplPlayground
        isCodeSandBox={false}
        // @ts-expect-error
        codeSandBoxId="my-stackblitz-id"
      />
      // ✅ good
      <EmbeddedReplPlayground isCodeSandBox codeSandBoxId="my-codesandbox-id" />
      // ✅ good
      <EmbeddedReplPlayground stackBlitzId="my-stackblitz-id" />
    </div>
  );
};
