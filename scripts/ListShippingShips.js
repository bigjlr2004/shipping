import { getHaulers, getShippingShips } from "./database.js";
const shippingShips = getShippingShips();
const haulers = getHaulers();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  // Was a shipping ship list item clicked?
  if (itemClicked.dataset.type === "shipper") {
    // Get the haulerId value of the shipping ship clicked
    const shippingShipHaulerId = itemClicked.dataset.foreignkeyhaulerid;

    // Define a default object for the found hauler
    let haulingShip = { name: "Incorrect" };

    // Iterate the array of hauler objects
    for (const hauler of haulers) {
      // Does the haulerId foreign key match the id of the current hauler?
      if (hauler.id === parseInt(shippingShipHaulerId)) {
        // Reassign the value of `haulingShip` to the current hauler
        haulingShip = hauler;
      }
    }
    // Show an alert to the user with this format...
    // Palais Royal is being hauled by Seawise Giant

    window.alert(
      `${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`
    );
  }
});

export const ListShippingShips = () => {
  let shipperHTML = "<ul>";

  for (const shipper of shippingShips) {
    // Convert each dock object to an <li> and append to the haulerHTML string

    shipperHTML += `<li data-id="${shipper.id}"
                    data-type="shipper"
                    data-name="${shipper.name}"
                    data-foreignkeyhaulerid="${shipper.haulerId}"
    >${shipper.name}</li>`;
  }

  shipperHTML += "</ul>";

  return shipperHTML;
};
