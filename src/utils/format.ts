function formatAmount(value: string) {
  const hasMinus = /^-/.test(value);
  let newValue = value
    .replace(/[^\d.]+/g, '')
    .replace(/^\./, '0.')
    // .replace(/\.+/, '.')
    .replace(/\./, 'dot')
    .replace(/\.+/g, '')
    .replace(/dot/, '.');
  // .replace(/(\d+\.\d*)\.\d*/, '$1');

  if (hasMinus) {
    newValue = '-' + newValue;
  }
  return newValue;
}