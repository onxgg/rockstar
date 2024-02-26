/*
  update event
  - this event occurs whenever an item is created, updated, or deleted
  - you can use this to keep logs of changes etc
*/
on('onx-inventory:event', (evt) => {
  console.log('----');
  console.log('inventory event');
  console.log(JSON.stringify(evt, null, 2));
});
