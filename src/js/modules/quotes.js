import { getResource } from "../services/services";

function quotes() {
  function getQuotes(data) {
    const parent = document.querySelector(".quotes__inner");

    function quoteTemplate(data, i) {
      return `
      <div class="quotes__text">
        ${data[i].quote}
      </div>
      <div class="quotes__author">${data[i].author}</div>
      `;
    }

    setInterval(() => {
      let i = Math.floor(Math.random() * Math.floor(data.length));
      parent.innerHTML = "";
      parent.innerHTML = quoteTemplate(data, i);
    }, 3000);
  }

  getResource("http://localhost:3000/quotes")
    .then((data) => getQuotes(data))
    .catch((err) => console.error(err));
}

export default quotes;
