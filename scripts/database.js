const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5", haulers: [5, 2] },
    { id: 2, location: "Busan, South Korea", volume: "21.6", haulers: [1, 3] },
    {
      id: 3,
      location: "Rotterdam, The Netherlands",
      volume: "14.35",
      haulers: [2, 4, 6],
    },
    {
      id: 4,
      location: "Antwerp, Belgium",
      volume: "12.04",
      haulers: [1, 3, 5, 7],
    },
    {
      id: 5,
      location: "Fort Smith, Arkansas",
      volume: "12.04",
      haulers: [],
    },
  ],
  haulers: [
    { id: 1, name: "Pioneering Spirit", dockId: 4 },
    { id: 2, name: "First Chance", dockId: 3 },
    { id: 3, name: "International", dockId: 2 },
    { id: 4, name: "Enterprise", dockId: 1 },
    { id: 5, name: "Central", dockId: 1 },
    { id: 6, name: "Wise Guys", dockId: 2 },
    { id: 7, name: "Black Label", dockId: 4 },
  ],
  shippingShips: [
    { id: 1, name: "USS Minnow", haulerId: 2 },
    { id: 2, name: "Esso Atlantic", haulerId: 3 },
    { id: 3, name: "Prairial", haulerId: 3 },
    { id: 4, name: "Palais Royal", haulerId: 1 },
    { id: 5, name: "Our Lady Peace", haulerId: 1 },
    { id: 6, name: "Peace and Joy", haulerId: 7 },
    { id: 7, name: "Wisconsin 67", haulerId: 2 },
    { id: 8, name: "Capsizer", haulerId: 6 },
    { id: 9, name: "Journey", haulerId: 5 },
    { id: 10, name: "Seahawk", haulerId: 2 },
    { id: 11, name: "Klingon", haulerId: 1 },
    { id: 12, name: "Wave Runner", haulerId: 3 },
    { id: 13, name: "Pirates Booty", haulerId: 4 },
    { id: 14, name: "No Loss Counted", haulerId: 5 },
    { id: 15, name: "Westminster", haulerId: 4 },
    { id: 16, name: "Kraken", haulerId: 2 },
  ],
};

export const getDocks = () => {
  return database.docks.map((dock) => ({ ...dock }));
};
export const getHaulers = () => {
  return database.haulers.map((hauler) => ({ ...hauler }));
};

export const getShippingShips = () => {
  return database.shippingShips.map((shippingShip) => ({ ...shippingShip }));
};
