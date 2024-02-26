/*
  notify
*/
RegisterCommand('notify', () => {
  emit('onx-inventory:notify', {
    title: 'Received',
    item: {
      name: '3d_printer',
      quantity: 1,
    },
  });
}, false);
