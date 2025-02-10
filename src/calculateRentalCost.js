/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  let total = days * price;
  const shortTermDiscount = 20;
  const longTermDiscount = 30;

  if (days >= 3) {
    total -= shortTermDiscount;
  }

  if (days >= 7) {
    total -= longTermDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
