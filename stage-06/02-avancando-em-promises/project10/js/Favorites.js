export class GithubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`;

    return fetch(endpoint)
      .then((data) => data.json())
      .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers,
      }));
  }
}

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();

    GithubUser.search('michaelwell23').then((user) => console.log(user));
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    );

    this.entries = filteredEntries;
    this.update();
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

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar esse usuário?');

        if (isOk) {
          this.delete(user);
        }
      };

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
