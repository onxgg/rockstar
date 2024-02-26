const sourceContainer = {
  itemsCondition: 'true', // allow any item in to the materials container
  className: 'inventoryContainerPrimaryCenter',
  slotsX: 5,
  slotsY: 5,
  maxY: 5,
  name: 'source-crafting-test',
  slotHeight: 'var(--container-slot-height)',
  slotWidth: 'var(--container-slot-width)',
  title: {
    enabled: true,
    label: 'Materials',
    quantity: {
      enabled: false,
      props: {},
    },
  },
}
const targetContainer = {
  itemsCondition: 'false', // dont let any items be dropped in to the output container
  className: 'inventoryContainerPositionRight',
  slotsX: 5,
  slotsY: 5,
  maxY: 5,
  name: 'target-crafting-test',
  slotHeight: 'var(--container-slot-height)',
  slotWidth: 'var(--container-slot-width)',
  title: {
    enabled: true,
    label: 'Output',
    quantity: {
      enabled: false,
      props: {},
    },
  },
}
/*
  open crafting window
*/
RegisterCommand('crafting:open', () => {
  emit('onx-inventory:focus', {
    hasFocus: true,
    hasCursor: true,
    keepInput: false,
  });
  emit('onx-inventory:crafting:open', {
    cancelIcon: 'fa-solid fa-ban',
    categories: {
      enabled: true,
      order: [
        'Special',
        'All',
      ],
    },
    id: 'crafting-test',
    inputs: {
      craftButton: 'Craft',
      quantity: 'Qty',
      search: 'Search',
    },
    locales: {
      cannotCancel: 'Could not refund materials, check available space.',
      craftInProgress: 'Please wait...',
      notEnoughMaterials: 'Not enough material!',
      queueTitle: 'Queue',
      queueEmptyMessage: 'Queue is empty',
      queueLoadingMessage: 'Queue is loading',
    },
    recipes: [
      {
        category: 'All',
        duration: 20,
        item: {
          name: 'burger',
        },
        requirements: [
          {
            quantity: 2,
            item: {
              name: 'potatoes',
            },
          },
          {
            quantity: 1,
            item: {
              name: 'cabbage',
            },
          },
        ],
      },
      {
        category: 'All',
        duration: 60,
        item: {
          name: '3d_printer',
        },
        requirements: [
          {
            quantity: 1,
            item: {
              name: 'plastic',
            },
          },
          {
            quantity: 2,
            item: {
              name: 'aluminum',
            },
          },
        ],
      },
    ],
    source: sourceContainer,
    target: targetContainer,
    title: 'Crafting',
  });
}, false);

/*
  close crafting window
*/
RegisterCommand('crafting:close', () => {
  emit('onx-inventory:crafting:close');
}, false);

/*
  open crafting window with inventory windows open
*/
RegisterCommand('crafting:open:with-invs', () => {
  emit('onx-inventory:focus', {
    hasFocus: true,
    hasCursor: true,
    keepInput: false,
  });
  emit('onx-inventory:crafting:open', {
    cancelIcon: 'fa-solid fa-ban',
    categories: {
      enabled: true,
      order: [
        'Special',
        'All',
      ],
    },
    id: 'crafting-test',
    inputs: {
      craftButton: 'Craft',
      quantity: 'Qty',
      search: 'Search',
    },
    locales: {
      cannotCancel: 'Could not refund materials, check available space.',
      craftInProgress: 'Please wait...',
      notEnoughMaterials: 'Not enough materials!',
      queueTitle: 'Queue',
      queueEmptyMessage: 'Queue is empty',
      queueLoadingMessage: 'Queue is loading',
    },
    recipes: [
      {
        category: 'All',
        duration: 20,
        item: {
          name: 'burger',
        },
        requirements: [
          {
            quantity: 2,
            item: {
              name: 'potatoes',
            },
          },
          {
            quantity: 1,
            item: {
              name: 'cabbage',
            },
          },
        ],
      },
      {
        category: 'All',
        duration: 60,
        item: {
          name: '3d_printer',
        },
        requirements: [
          {
            quantity: 1,
            item: {
              name: 'plastic',
            },
          },
          {
            quantity: 2,
            item: {
              name: 'aluminum',
            },
          },
        ],
      },
    ],
    source: sourceContainer,
    target: targetContainer,
    title: 'Crafting',
  });
  emit('onx-inventory:open', {
    primary: {
      className: 'inventoryContainerPositionLeft',
      style: {},
    },
    inventories: [sourceContainer, targetContainer],
  });
}, false);
