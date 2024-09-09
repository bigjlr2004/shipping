import { getHaulers, getShippingShips } from "./database.js";
const haulers = getHaulers();
const shippingShips = getShippingShips();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  let counter = 0;

  // Was a hauler list item clicked?
  if (itemClicked.dataset.type === "hauler") {
    // Get the id of the hauler clicked
    const haulerId = itemClicked.dataset.id;
    // Start a counter variable at 0

    // Iterate all of the shipping ships
    for (const shippingShip of shippingShips) {
      // Does the haulerId foreign key match the id?
      if (shippingShip.haulerId === parseInt(itemClicked.dataset.id)) {
        // Increase the counter by 1
        counter += 1;
      }
    }
    window.alert(`This hauler is carrying ${counter} shipping containers.`);
  }
});

export const ListHaulers = () => {
  let haulerHTML = "<ul>";

  for (const hauler of haulers) {
    // Convert each dock object to an <li> and append to the haulerHTML string

    haulerHTML += `<li data-id="${hauler.id}"
                    data-type="hauler"
    >${hauler.name}</li>`;
  }

  haulerHTML += "</ul>";

  return haulerHTML;
};
