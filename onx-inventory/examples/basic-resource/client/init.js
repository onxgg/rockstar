/*
  init onx-inventory (required, first event)
*/
RegisterCommand('init', () => {
  emit('onx-inventory:init', {
    config: {
      actionBar: {
        // display icon in each slot, index referenced by slot number
        icons: [
          'fa-solid fa-1',
          'fa-solid fa-2',
          'fa-solid fa-3',
          'fa-solid fa-4',
          'fa-solid fa-5',
        ],
        // enable/disable the action bar
        enabled: true,
        // how many slots does the action bar have?
        slots: 5,
        // conditional js for which items can be dropped in to the bar
        itemsCondition: `item.inventory === 'character-1'`,
        // item render, see README
        render: [
          {
            src: '${item.image}',
            type: 'image',
            className: 'inventoryContainerItemImage',
            style: {},
          },
        ],
      },
      /*
        available options are CTRL, ALT, SHIFT
      */
      binds: {
        // combine 2 items together while dragging one item over another
        combine: 'CTRL',
        // fast move the items to the next inventory
        moveToTarget: 'CTRL',
        // if qty is set and the item has more of the qty, it will split off the qty amount in to a separate stack
        fastSplit: 'CTRL',
      },
      items: {
        // base item config
        config: global.exports['basic-resource']['shared:getItemConfig'](),
        // item render, see README
        render: [
          {
            src: '${item.image}',
            type: 'image',
            className: 'inventoryContainerItemImage',
            style: {},
          },
          {
            condition: 'item.quantity > 1',
            label: 'x${item.quantity}',
            type: 'text',
            className: 'inventoryContainerItemQuantity',
            style: {},
          },
          {
            condition: 'item.quality >= 0.5 && item.quality < 0.75',
            label: '',
            type: 'text',
            className: 'inventoryContainerItemQuality inventoryContainerItemQualityGreen',
            style: {},
          },
          {
            condition: 'item.quality >= 0.25 && item.quality < 0.5',
            label: '',
            type: 'text',
            className: 'inventoryContainerItemQuality inventoryContainerItemQualityYellow',
            style: {},
          },
          {
            condition: 'item.quality > 0 && item.quality < 0.25',
            label: '',
            type: 'text',
            className: 'inventoryContainerItemQuality inventoryContainerItemQualityOrange',
            style: {},
          },
          {
            condition: 'item.quality > -1 && item.quality < 0.001',
            label: '',
            type: 'text',
            className: 'inventoryContainerItemQuality inventoryContainerItemQualityRed',
            style: {},
          },
          // {
          //   condition: 'item.weight > 0',
          //   label: '${item.quantity * item.weight}lb',
          //   type: 'text',
          //   className: 'inventoryContainerItemWeight',
          //   style: {},
          // },
        ],
      },
      /*
        menu options for items (upon right click)
        - use the condition config to enable/disable that menu option
      */
      menuOptions: [
        {
          condition: 'item.name === "3d_printer"',
          label: 'Test Label',
          icon: 'fa-solid fa-user',
        },
        {
          condition: 'item.name === "3d_printer"',
          label: 'Test Label 2',
          icon: 'fa-solid fa-user',
        },
      ],
      notifications: {
        // render item, see README
        render: [
          {
            src: '${item.image}',
            type: 'image',
            className: 'inventoryContainerItemImage',
            style: {},
          },
          {
            condition: 'item.quantity > 1',
            label: 'x${item.quantity}',
            className: 'inventoryContainerItemQuantity',
            type: 'text',
            style: {},
          },
        ],
        // how long until the notif fades out
        timeout: 5000,
      },
      tooltip: {
        // render tooltip, see README
        render: [
          {
            condition: 'item.quantity === 1',
            label: '${item.label}',
            type: 'text',
            className: 'inventoryTooltipLabel',
            style: {},
          },
          {
            condition: 'item.quantity > 1',
            label: '${item.label} x${item.quantity}',
            type: 'text',
            className: 'inventoryTooltipLabel',
            style: {},
          },
          {
            label: '${item.description}',
            type: 'text',
            className: 'inventoryTooltipDescription',
            style: {},
          },
          {
            src: '${item.image}',
            type: 'image',
            className: 'inventoryTooltipImage',
            style: {},
          },
          {
            type: 'badges',
            className: 'inventoryTooltipBadgesContainer',
            style: {},
          },
          {
            condition: 'item.quality >= 0.5 && item.quality < 0.75',
            label: '${Math.round(item.quality * 100)}%',
            type: 'text',
            className: 'inventoryTooltipQuality inventoryTooltipQualityGreen',
            style: {},
          },
          {
            condition: 'item.quality >= 0.25 && item.quality < 0.5',
            label: '${Math.round(item.quality * 100)}%',
            type: 'text',
            className: 'inventoryTooltipQuality inventoryTooltipQualityYellow',
            style: {},
          },
          {
            condition: 'item.quality > 0 && item.quality < 0.25',
            label: '${Math.round(item.quality * 100)}%',
            type: 'text',
            className: 'inventoryTooltipQuality inventoryTooltipQualityOrange',
            style: {},
          },
          {
            condition: 'item.quality > -1 && item.quality < 0.001',
            label: '${Math.round(item.quality * 100)}%',
            type: 'text',
            className: 'inventoryTooltipQuality inventoryTooltipQualityRed',
            style: {},
          },
        ],
        /*
          badges for the tooltip
            use a string that evaluates to javascript and returns an array of strings
            to display on the tooltip itself
          in this example, if the item looks like:
          {
            ...,
            meta: {
              _hidden: '1',
              display: '2',
              _badges: ['X', 'Y', 'Z'],
            }
          }
          then the following badges will be displayed: `display: 2`, `X`, `Y`, `Z`
        */
        badges: `(function badges() {
          var badges = [];
          for (var key of Object.keys(item.meta)) {
            if (key.indexOf('_') === 0) continue;
            badges.push(key + ': ' + item.meta[key]);
          }
          return badges.concat(item.meta._badges || []);
        })()`,
      },
      // use item weights to balance inventory?
      useWeight: global.exports['basic-resource']['shared:getUseWeight'](),
    },
    themes: [
      {
        name: 'test',
        theme: {},
      },
      {
        name: 'default',
        theme: {},
      },
    ],
  });
}, false);

/*
  set primary inventory (required, second event)
*/
RegisterCommand('set-primary', () => {
  emit('onx-inventory:set-primary', {
    inventory: {
      name: 'character-1',
      slotsX: 5,
      slotsY: 8,
      maxY: 5, // max before scroll
      slotHeight: 'var(--container-slot-height)', // css, can be '4vw' or 'var(...)', etc
      slotWidth: 'var(--container-slot-width)',
      title: {
        enabled: true,
        label: 'You',
        quantity: {
          enabled: true,
        },
      },
      weight: 250,
    },
  });
}, false);
