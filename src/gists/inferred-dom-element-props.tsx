import { ComponentProps } from "react";

const App = () => {
  const buttonProps: ComponentProps<"button"> = {
    type: "button",
    illegalProps: "foo",
  };

  const buttonPropType = buttonProps.type;

  return (
    <div>
      <button {...buttonProps}>Click me</button>;
    </div>
  );
};
