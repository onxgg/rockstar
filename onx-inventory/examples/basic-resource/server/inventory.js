const MONGO_URL = GetConvar('sv_onx_inventory_mongo_url', 'mongodb://api:password@localhost:27017/onx-inventory?authSource=admin&authMechanism=DEFAULT');

const SQL_OPTIONS = {
  host     : 'localhost',
  port     : 3306,
  user     : 'api',
  password : 'password',
  database : 'my_db',
}

/*
  init onx-inventory
*/
RegisterCommand('init-mongo', () => {
  emit('onx-inventory:init', {
    db: 'mongo',
    mongooseOptions: MONGO_URL,
    items: global.exports['basic-resource']['shared:getItemConfig'](),
    useWeight: global.exports['basic-resource']['shared:getUseWeight'](),
  });
}, false);
RegisterCommand('init-sql', () => {
  emit('onx-inventory:init', {
    db: 'sql',
    sqlOptions: SQL_OPTIONS,
    items: global.exports['basic-resource']['shared:getItemConfig'](),
    useWeight: global.exports['basic-resource']['shared:getUseWeight'](),
  });
}, false);

/*
  createItems
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
      meta: {
        _hidden: 'key',
        'Food Type': 'Vegetable',
        _badges: ['Organic'],
      },
    },
    {
      name: 'cabbage',
      quantity: 5,
      meta: {
        _hidden: 'key',
        'Food Type': 'Vegetable',
        _badges: ['Organic'],
      },
    },
  ];
  const result = await global.exports['onx-inventory'].createItems(container, items, {
    // source data is passed thru as meta data to the items event
    // you may reference this yourself but its optional
    // onx-inventory created events will include this data when pertinent
    source: {
      some: 'data',
    },
  });
  console.log({ result })
}, false);

/*
  updateItems
*/
RegisterCommand('updateItems', async () => {
  const q = [
    {
      source: {
        inventory: 'character-1',
        slot: 0,
      },
      target: {
        inventory: 'character-1',
        slot: 1,
      },
      quantity: 1,
    },
  ];
  const result = await global.exports['onx-inventory'].updateItems(q, {
    ignoreQuantityCheck: false,
    source: {
      some: 'data',
    },
  });
  console.log({ result });
}, false);

/*
  deleteItems
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
  const result = await global.exports['onx-inventory'].deleteItems(q, {
    ignoreQuantityCheck: false,
    includeExpired: false,
    source: {
      some: 'data',
    },
  });
  console.log({ result });
}, false);
