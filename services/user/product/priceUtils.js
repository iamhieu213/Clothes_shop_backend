export const calculatePriceFromVariants = (basePrice = 0, variants = []) => {
  // Price is now always from product base_price, not variants
  const numericBase = parseFloat(basePrice || 0);
  return Number.isFinite(numericBase) ? numericBase : 0;
};

export const calculateDiscountPercent = (price, salePrice) => {
  if (!salePrice || !price) return null;
  return Math.round(((price - salePrice) / price) * 100);
};
