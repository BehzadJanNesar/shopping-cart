const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
   style: "currency",
   currency: "USD",
});

export function formatCurrency(number: Number) {
   return CURRENCY_FORMATTER.format(number);
}
