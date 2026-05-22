document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.querySelector("#theme-toggle");

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });

  let count = 0;

  const countBtn = document.querySelector("#count-btn");
  const display = document.querySelector("#count-display");

  countBtn.addEventListener("click", () => {
    count++;
    display.textContent = count;
  });

  const loadBtn = document.querySelector("#game-loader");

  const dropdown = document.querySelector("#genre-dropdown");

  function renderGenreOptions(gamesList) {
    const uniqueGenres = new Array();

    gamesList.forEach((game) => {
      if (!uniqueGenres.includes(game.genre)) {
        uniqueGenres.push(game.genre);
      }
    });

    uniqueGenres.sort();

    uniqueGenres.forEach((genre) => {
      const option = document.createElement("option");
      option.value = genre;
      option.textContent = genre;
      dropdown.appendChild(option);
    });
  }

  renderGenreOptions(games);

  const list = document.querySelector("#list");

  loadBtn.addEventListener("click", function () {
    applyFilters();
  });

  const searchBox = document.querySelector("#search");

  function applyFilters() {
    let filteredGames = games;
    const query = searchBox.value.toLowerCase();

    if (dropdown.value !== "all") {
      filteredGames = filteredGames.filter(
        (game) => game.genre === dropdown.value,
      );
    }

    if (query) {
      filteredGames = filteredGames.filter((game) =>
        game.name.toLowerCase().includes(query),
      );
    }

    renderGames(filteredGames);
  }

  searchBox.addEventListener("input", applyFilters);
  dropdown.addEventListener("change", applyFilters);

  function renderGames(gamesToShow) {
    list.innerHTML = "";
    gamesToShow.forEach((game) => {
      const li = document.createElement("li");
      li.textContent = `${game.name} - ${game.genre}`;
      list.appendChild(li);
    });
  }

  applyFilters();

  const dogImg = document.querySelector("#random-dog");

  async function renderRandomDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    const data = await response.json();

    dogImg.src = data.message;
  }

  renderRandomDog();
});
