/*
  purchase items
*/
onNet('basic-resource:store-purchase', async (data) => {
  const container = {
    name: 'character-1',
    slotsX: 5,
    slotsY: 8,
    weight: 250,
  };
  console.log({ data });
  // do payment checks etc
  const result = await global.exports['onx-inventory'].createItems(container, data.cart);
  console.log({ result })
});
