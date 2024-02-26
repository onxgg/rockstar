const MONGO_URL = GetConvar('sv_onx_inventory_mongo_url', 'mongodb://api:password@localhost:27017/onx-inventory?authSource=admin&authMechanism=DEFAULT');

/*
  init onx-inventory
  - send mongoose options, which can be a string or object
  - send item config, server required
*/
RegisterCommand('init', () => {
  emit('onx-inventory:init', {
    mongooseOptions: MONGO_URL,
    items: global.exports['basic-resource']['shared:getItemConfig'](),
    useWeight: global.exports['basic-resource']['shared:getUseWeight'](),
  });
}, false);

/*
  createItems
  - container: the config for the inventory container
  - items: item config
*/
RegisterCommand('createItems', async () => {
  const container = {
    name: 'character-1',
    slotsX: 5,
    slotsY: 8,
    weight: 1,
  };
  const items = [
    {
      name: 'potatoes',
      quantity: 5,
    },
    {
      name: 'cabbage',
      quantity: 5,
    },
  ];
  const result = await global.exports['onx-inventory'].createItems(container, items);
  console.log({ result })
}, false);
RegisterCommand('createItems2', async () => {
  const container = {
    name: 'character-1',
    slotsX: 5,
    slotsY: 8,
    weight: 1,
  };
  const items = [
    {
      name: '3d_printer',
      quantity: 1,
    },
  ];
  const result = await global.exports['onx-inventory'].createItems(container, items);
  console.log({ result })
}, false);

/*
  updateItems
  - query: the query and updates to perform
*/
RegisterCommand('updateItems', async () => {
  const q = [];
  const result = await global.exports['onx-inventory'].updateItems(q);
  console.log({ result });
}, false);

/*
  deleteItems
  - query: the query and deletes to perform
*/
RegisterCommand('deleteItems', async () => {
  const q = [
    {
      source: {
        name: '3d_printer',
        inventory: 'character-1',
      },
      quantity: 1,
    },
  ];
  const result = await global.exports['onx-inventory'].deleteItems(q);
  console.log({ result });
}, false);
