export const currencyNumber = (
  value: number,
  options?: Intl.NumberFormatOptions,
) => {
  if (
    typeof Intl === "object" &&
    Intl &&
    typeof Intl.NumberFormat === "function"
  ) {
    return new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
      ...options,
    }).format(value);
  }

  return value.toString();
};