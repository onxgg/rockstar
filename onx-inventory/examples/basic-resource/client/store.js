/*
  store
*/
RegisterCommand('store:open', async () => {
  emit('onx-inventory:focus', {
    hasFocus: true,
    hasCursor: true,
    keepInput: false,
  });
  const response = await global.exports['onx-inventory'].openStore({
    categories: {
      enabled: true,
      order: [
        'Special',
        'All',
      ],
    },
    icons: { 
      addToCart: 'fa-solid fa-square-plus fa-2x',
      minusFromCart: 'fa-solid fa-square-minus',
      removeFromCart: 'fa-solid fa-trash',
    },
    inputs: {
      quantity: 'Qty',
      search: 'Search',
    },
    locales: {
      cartTitle: 'Cart',
      cartEmptyMessage: 'You have no items in your cart yet.',
      inStock: '${item.stock} in stock',
      outOfStock: 'out of stock',
      purchaseMessage: 'Purchase',
    },
    items: [
      {
        id: '1',
        category: 'All',
        item: {
          name: 'cabbage',
        },
        stock: 10,
        // use the price references for each currency
        // see below, currencies have a "ref" attribute, this price will be displayed / used for calculations when selected
        price: {
          usd: 1000,
          gbp: 500,
        },
      },
      {
        id: '2',
        category: 'Special',
        item: {
          name: '3d_printer',
          label: '3D Printer (custom)',
          description: 'This is a custom description',
        },
        stock: 0,
        price: {
          usd: 1000,
          gbp: 500,
        },
      },
    ],
    currencies: [
      {
        id: '1',
        // how much available currency they have
        // for this particular config
        amount: 10000,
        label: 'Cash',
        // string that evaluate to javascript
        // accepts "amount" as a variable
        // returns the format for the amount
        format: `(function usd() {
          return new Intl.NumberFormat('en-US', {
            currency: 'USD',
            maximumFractionDigits: 0,
            style: 'currency',
          }).format(amount);
        })()`,
        // ref field for item prices in that currency
        ref: 'usd',
      },
      {
        id: '2',
        amount: 100,
        label: 'Bank - Personal Account',
        format: `(function usd() {
          return new Intl.NumberFormat('en-US', {
            currency: 'USD',
            maximumFractionDigits: 0,
            style: 'currency',
          }).format(amount);
        })()`,
        ref: 'usd',
      },
      {
        id: '3',
        amount: 500,
        label: 'Bank - GPB',
        format: `(function gbp() {
          return new Intl.NumberFormat('en-GB', {
            currency: 'GBP',
            maximumFractionDigits: 0,
            style: 'currency',
          }).format(amount);
        })()`,
        ref: 'gbp',
      },
    ],
    title: '24/7',
  });
  console.log({ response });
  emit('onx-inventory:focus', {
    hasFocus: false,
    hasCursor: false,
    keepInput: false,
  });
  global.exports['onx-inventory'].closeStore();
  if (!response) return;
  emitNet('basic-resource:store-purchase', response);
}, false);

/*
  manually close the store
*/
RegisterCommand('store:close', () => {
  global.exports['onx-inventory'].closeStore();
  emit('onx-inventory:focus', {
    hasFocus: false,
    hasCursor: false,
    keepInput: false,
  });
}, false);

/*
  open store with primary inventory at same time
*/
RegisterCommand('store:open:with-inv', async () => {
  emit('onx-inventory:focus', {
    hasFocus: true,
    hasCursor: true,
    keepInput: false,
  });
  emit('onx-inventory:open', {
    primary: {
      className: 'inventoryContainerPrimaryCenter',
      style: {},
    },
    inventories: [],
  });
  const response = await global.exports['onx-inventory'].openStore({
    categories: {
      enabled: true,
      order: [
        'Special',
        'All',
      ],
    },
    icons: { 
      addToCart: 'fa-solid fa-square-plus fa-2x',
      minusFromCart: 'fa-solid fa-square-minus',
      removeFromCart: 'fa-solid fa-trash',
    },
    inputs: {
      quantity: 'Qty',
      search: 'Search',
    },
    locales: {
      cartTitle: 'Cart',
      cartEmptyMessage: 'You have no items in your cart yet.',
      inStock: '${item.stock} in stock',
      outOfStock: 'out of stock',
      purchaseMessage: 'Purchase',
    },
    items: [
      {
        id: '1',
        category: 'All',
        item: {
          name: 'cabbage',
        },
        stock: 10,
        price: {
          usd: 1000,
          gbp: 500,
        },
      },
      {
        id: '2',
        category: 'Special',
        item: {
          name: '3d_printer',
          label: '3D Printer (custom)',
          description: 'This is a custom description',
        },
        stock: 0,
        price: {
          usd: 1000,
          gbp: 500,
        },
      },
    ],
    currencies: [
      {
        id: '1',
        amount: 10000,
        label: 'Cash',
        format: `(function usd() {
          return new Intl.NumberFormat('en-US', {
            currency: 'USD',
            maximumFractionDigits: 0,
            style: 'currency',
          }).format(amount);
        })()`,
        ref: 'usd',
      },
      {
        id: '2',
        amount: 100,
        label: 'Bank - Personal Account',
        format: `(function usd() {
          return new Intl.NumberFormat('en-US', {
            currency: 'USD',
            maximumFractionDigits: 0,
            style: 'currency',
          }).format(amount);
        })()`,
        ref: 'usd',
      },
      {
        id: '3',
        amount: 500,
        label: 'Bank - GPB',
        format: `(function gbp() {
          return new Intl.NumberFormat('en-GB', {
            currency: 'GBP',
            maximumFractionDigits: 0,
            style: 'currency',
          }).format(amount);
        })()`,
        ref: 'gbp',
      },
    ],
    title: '24/7',
  });
  console.log(response);
  global.exports['onx-inventory'].closeStore();
  emit('onx-inventory:close');
  emit('onx-inventory:focus', {
    hasFocus: false,
    hasCursor: false,
    keepInput: false,
  });
  if (!response) return;
  emitNet('basic-resource:store-purchase', response);
});
