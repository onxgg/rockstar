/*
  change theme
*/
RegisterCommand('set-theme', (src, args) => {
  const theme = args[0];
  emit('onx-inventory:use-theme', { theme });
});
