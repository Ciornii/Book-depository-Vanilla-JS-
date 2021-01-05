import { getResource } from "../services/services";

function quotes() {
  function getQuotes(data) {
    const quotesWrapper = document.querySelector(".quotes__inner");
    let paused = false;

    function quoteTemplate(data, i) {
      return `
      <div class="quotes__text">
        ${data[i].quote}
      </div>
      <div class="quotes__author">${data[i].author}</div>
      `;
    }

    let i = Math.floor(Math.random() * Math.floor(data.length));
    quotesWrapper.innerHTML = quoteTemplate(data, i);

    function autoPlay() {
      paused = setInterval(() => {
        let i = Math.floor(Math.random() * Math.floor(data.length));

        quotesWrapper.classList.remove("fadeIn");
        quotesWrapper.classList.add("fadeOut");

        setTimeout(() => {
          quotesWrapper.style.visibility = "hidden";
          quotesWrapper.innerHTML = "";
          quotesWrapper.innerHTML = quoteTemplate(data, i);
          quotesWrapper.style.visibility = "visible";
          quotesWrapper.classList.remove("fadeOut");
          quotesWrapper.classList.add("animated", "fadeIn");
        }, 500);
      }, 10000);
    }
    autoPlay();

    quotesWrapper.addEventListener("mouseenter", () => {
      clearInterval(paused);
    });
    quotesWrapper.addEventListener("mouseleave", () => {
      autoPlay();
    });
  }

  getResource("http://localhost:3000/quotes")
    .then((data) => getQuotes(data))
    .catch((err) => console.error(err));
}

export default quotes;
