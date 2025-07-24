export function formatToReadable(amount) {
  if (amount >= 1000000000) {
    return (amount / 100000000).toFixed(0) + " bi";
  } else if (amount >= 1000000) {
    return (amount / 100000).toFixed(0) + " mi"; 
  } else if (amount >= 10000) {
    return (amount / 1000).toFixed(0) + " mil";
  }
  return amount.toLocaleString("pt-BR"); // exemplo: 9.999
}
