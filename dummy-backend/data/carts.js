const fs = require('node:fs/promises');

async function getStoredCarts() {
  const rawFileContent = await fs.readFile('carts.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  //const storedCarts = data.items ?? [];
  return data;
}

function storeCarts(carts) {
  return fs.writeFile('carts.json', JSON.stringify(carts || []));
}

exports.getStoredCarts = getStoredCarts;
exports.storeCarts = storeCarts;