/*
  action bar key bind event
  - triggers above event if valid item in slot
*/
RegisterCommand('use-action-bar', (src, args) => {
  const slot = Number(args[0]);
  emit('onx-inventory:use-item', { slot });
});

/*
  set action bar item
*/
RegisterCommand('set-action-bar', (src, args) => {
  const slot = Number(args[0]);
  const container = {
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
        props: {}, // input props like 'type="number"' etc
      },
    },
    weight: 250,
  };
  const item = {
    name: '3d_printer',
  };
  emit('onx-inventory:set-action-bar', { container, item, slot });
});

/*
  clear action bar key
*/
RegisterCommand('clear-action-bar', (src, args) => {
  const slot = Number(args[0]);
  emit('onx-inventory:clear-action-bar', { slot });
});
