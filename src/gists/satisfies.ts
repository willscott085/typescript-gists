type Color = string | { r: number; g: number; b: number };

// the satifies operator checks a type without
// broadening the type to what you want to
// check it against
const red: Color = "red";
// red is of type Color
const green = "green" as Color;
// green is of type Color so the typechecker
// believes that green can either be a string
// or an object with r, g, b properties. We
// are in effect telling the compiker that
// we know better
const blue = "blue" satisfies Color;
// blue is of type "blue";

// "as" is dangerous because we can do
// stuff like this
const green2 = { r: 0 } as Color;

// "satisfies"  is different because it
// is a type guard. It is only true if
// the type is correct. It is not dangerous
// because it is only used to narrow down
// the type of a variable
const green3 = { r: 0 } satisfies Color;

// "satisfies" aslo plays nice with "as const"
const blue2 = { r: 0, g: 0, b: 255 } as const satisfies Color;

blue2.b;
// resolves as the literal value 255

export {};
