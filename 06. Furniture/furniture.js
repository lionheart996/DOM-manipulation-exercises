document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const inputFormEl = document.querySelector('#input');

  inputFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputEl = e.target.querySelector('textarea');
    const data = JSON.parse(inputEl.value);
    const productListEl = document.querySelector('table tbody');

    console.log(data);

    data.forEach((item) => {
      const product = document.createElement('tr');

      const productImageCell = document.createElement('td');
      const productImageEl = document.createElement('img');
      productImageEl.setAttribute('src', item.img);
      productImageCell.append(productImageEl);

      const productNameCell = document.createElement('td');
      productNameCell.textContent = item.name;

      const productPriceCell = document.createElement('td');
      productPriceCell.textContent = item.price;

      const productDecFactorCell = document.createElement('td');
      productDecFactorCell.textContent = item.decFactor;

      const productCheckCell = document.createElement('td');
      const productCheckInput = document.createElement('input');
      productCheckInput.setAttribute('type', 'checkbox');
      productCheckCell.append(productCheckInput);

      product.append(
        productImageCell,
        productNameCell,
        productPriceCell,
        productDecFactorCell,
        productCheckCell
      );

      productListEl.append(product);
    });
  });

  const shopFormEl = document.querySelector('#shop');

  shopFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const outputEl = e.target.querySelector('textarea');

    // Select all rows and filter for those with a checked checkbox
    const data = Array.from(document.querySelectorAll('table tbody tr'))
      .filter((row) => row.querySelector('input[type="checkbox"]').checked)
      .map((el) => ({
        name: el.children[1].textContent.trim(),
        price: Number(el.children[2].textContent),
        decFactor: Number(el.children[3].textContent),
      }));

    // Generate output
    let output = `Bought furniture: ${data.map((el) => el.name).join(', ')}\n`;
    output += `Total price: ${data
      .reduce((total, element) => total + element.price, 0)
      .toFixed(2)}\n`;
    output += `Average decoration factor: ${(
      data.reduce((factor, el) => factor + el.decFactor, 0) / data.length || 0
    ).toFixed(2)}\n`;

    // Set output to the textarea
    outputEl.value = output;
  });
}