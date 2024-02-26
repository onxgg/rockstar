/*
  open inventory
*/
RegisterCommand('open', () => {
  emit('onx-inventory:open', {
    primary: {
      className: 'inventoryContainerPrimaryCenter',
      style: {},
    },
    inventories: [],
  });
  
  // https://docs.fivem.net/natives/?_0x5B98AE30 & https://docs.fivem.net/natives/?_0x3FF5E5F8
  emit('onx-inventory:focus', {
    hasFocus: true,
    hasCursor: true,
    keepInput: false,
  });
}, false);

RegisterCommand('open-drop', () => {
  emit('onx-inventory:open', {
    inventories: [],
    primary: {
      className: 'inventoryContainerCenterLeft',
      style: {},
    },
    inventories: [
      {
        // itemsCondition: `(function a () {
        //   return item.config.type === container.config.allowType;
        // })()`,
        redact: false,
        name: 'drop-1',
        slotsX: 5,
        slotsY: 2,
        maxY: 5,
        slotHeight: 'var(--container-slot-height)',
        slotWidth: 'var(--container-slot-width)',
        className: 'inventoryContainerCenterRight',
        style: {},
        title: {
          enabled: true,
          label: 'Drop',
        },
        weight: 2,
      },
    ],
  });
  
  // https://docs.fivem.net/natives/?_0x5B98AE30 & https://docs.fivem.net/natives/?_0x3FF5E5F8
  emit('onx-inventory:focus', {
    hasFocus: true,
    hasCursor: true,
    keepInput: false,
  });
}, false);

/*
  close inventory
*/

RegisterCommand('close', () => {
  emit('onx-inventory:close');
}, false);
