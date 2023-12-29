import data from './data.js';

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = data;
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector('table tbody');

    this.update();
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        '.user img'
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(
        '.user img'
      ).textContent = `Imagem do avatar de ${user.login}`;

      row.querySelector('.user p').textContent = user.name;
      row.querySelector('.user a').href = `https://github.com/${user.login}`;
      row.querySelector('.user a span').textContent = `@${user.login}`;
      row.querySelector('.repositories').textContent = user.public_repos;
      row.querySelector('.followers').textContent = user.followers;

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement('tr');

    const content = `
      <td class="user">
        <img
          src="https://github.com/michaelwell23.png"
          alt="Imagem do avatar de Michaelwell23"
        />
        <a
          href="https://github.com/michaelwell23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Michael W. Lopes</p>
          <span>michaelwell23</span>
        </a>
      </td>
      <td class="repositories">1823</td>
      <td class="followers">345</td>
      <td><button class="remove">&#120;</button></td>
      `;

    tr.innerHTML = content;

    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove();
    });
  }
}
