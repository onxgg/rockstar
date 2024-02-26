/*
  items updated event
*/
on('onx-inventory:items:update', ({ items }) => {
  console.log('update', items);
});

/*
  use item event
*/
on('onx-inventory:item-used', ({ container, item }) => {
  console.log(container, item);
});

/*
  use menu option
*/
on('onx-inventory:use-menu-item', ({ config, container, item }) => {
  console.log(config, container, item);
});

/*
  combine items
*/
on('onx-inventory:combine-items', ({ source, target }) => {
  console.log(source.container, source.item);
  console.log(target.container, target.item);
});
