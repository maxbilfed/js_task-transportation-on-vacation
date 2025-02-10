/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  const total = days * price;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 30;

  if (days >= shortTerm) {
    return total - shortTermDiscount;
  }

  if (days >= longTerm) {
    return total - longTermDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
