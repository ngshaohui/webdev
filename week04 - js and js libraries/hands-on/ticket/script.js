const cirque_du_soleil = {
  name: "Cirque du Soleil",
  price: 20,
  currency: "euros",
  date: "2023-03-04",
};

/**
 * Get the name of a show.
 *
 * @param {Object} show - The show for which you want to retrieve the name.
 * @returns {string} - The name of the show.
 */
function getShowName(show) {
  // TODO implement with dot notation
  return "TODO";
}

/**
 * Calculate the total price for a given show and quantity of tickets.
 *
 * @param {Object} show - The show for which you want to calculate the ticket price.
 * @param {number} quantity - The number of tickets to purchase.
 * @returns {string} - A string representing the total price and currency (e.g., "40 euros").
 */
function getTicketPrice(show, quantity) {
  // TODO implement with a template string
  return `TODO`;
}

document.querySelector("#title").textContent = getShowName(cirque_du_soleil);
document.querySelector("#btn").addEventListener("click", () => {
  const qty = document.querySelector("#ticket-quantity").value;
  document.querySelector("#price").textContent = getTicketPrice(
    cirque_du_soleil,
    qty
  );
});
