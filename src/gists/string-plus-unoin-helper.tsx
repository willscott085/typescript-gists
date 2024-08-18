type Icon = "home" | "settings" | "about";
type ButtonVariant = "primary" | "secondary" | "tertiary";

/**
 * This is a helper to ease the pain of the
 * (string & {}) hack and to make it easier
 * to understand what is going on.
 */
type LooseAutcomplete<T> = T | (string & {});
type LooseIcon = LooseAutcomplete<Icon>;
type LooseButtonVariant = LooseAutcomplete<ButtonVariant>;

export const icons: LooseIcon[] = [
  "home",
  "settings",
  "about",
  "any-other-string",
  //maintain autocomplete
];

export const buttonVariants: LooseButtonVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "any-other-string",
  //maintain autocomplete
];
