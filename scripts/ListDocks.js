import { getDocks, getHaulers } from "./database.js";
const docks = getDocks();
const haulers = getHaulers();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  //create a variable to hold the names of the haulers being unloaded.
  let displayhaulers = [];

  // Was a dock list item clicked
  if (itemClicked.dataset.type === "dock") {
    // Iterate the array of dock objects.
    for (const dock of docks) {
      //check to see if the dock id matches the dock clicked
      if (parseInt(itemClicked.dataset.id) === dock.id) {
        //iterate through the array of hauler ids being unloaded at each dock
        for (const hauler of dock.haulers) {
          //iterate through all the haulers to get the names
          for (const haulerobject of haulers) {
            if (hauler === haulerobject.id) {
              displayhaulers.push(haulerobject.name);
            }
          }
        }
      }
    }
    let resultString = "";

    if (displayhaulers.length > 0) {
      if (displayhaulers.length === 1) {
        resultString = displayhaulers[0];
      } else {
        const lastItem = displayhaulers.pop();
        resultString = displayhaulers.join(", ") + " and " + lastItem;
        window.alert(
          `${itemClicked.dataset.name} is currently unloading ${resultString}.`
        );
      }
    } else {
      window.alert(`${itemClicked.dataset.name} is currently not unloading.`);
    }
  }
});

export const ListDocks = () => {
  let docksHTML = "<ul>";

  for (const dock of docks) {
    // Convert each dock object to an <li> and append to the docksHTML string

    docksHTML += `<li data-id="${dock.id}"
                    data-type="dock"
                    data-name="${dock.location}"
                  data-location="${dock.location}"
    >${dock.location} : ${dock.volume}</li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};
