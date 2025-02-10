/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  let total = days * price;

  if (days >= 3) {
    total -= 20;
  }

  if (days >= 7) {
    total -= 30;
  }

  return total;
}

module.exports = calculateRentalCost;
