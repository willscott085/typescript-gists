const presetSizes = {
  xs: "0.5rem",
  sm: "1rem",
};

type Size = keyof typeof presetSizes;

/**
 * We need to use this crazy work around
 * to keep the autocomplete working
 */
type LooseSize = Size | (string & {});

const Icon = (props: { size: LooseSize }) => {
  return (
    <div
      style={{
        width: presetSizes[props.size as Size],
        height: presetSizes[props.size as Size],
      }}
    />
  );
};

const App = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        style={{
          width: "200px",
          height: "40px",
          border: "1px solid black",
        }}
      />
      <Icon size="sm" />
      <Icon size="xs" />
      <Icon size="anything" />
    </div>
  );
};
