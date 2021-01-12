import {DB} from '../db';

function quotes() {
  function getQuotes(data) {
    const quotesWrapper = document.querySelector(".quotes__inner");
    let paused = false;

    function quoteTemplate({quote, author}) {
      return `
      <div class="quotes__text">
        ${quote}
      </div>
      <div class="quotes__author">${author}</div>
      `;
    }

    let i = Math.floor(Math.random() * Math.floor(data.length));
    quotesWrapper.innerHTML = quoteTemplate(data[i]);

    function autoPlay() {
      paused = setInterval(() => {
        let i = Math.floor(Math.random() * Math.floor(data.length));

        quotesWrapper.classList.remove("fadeIn");
        quotesWrapper.classList.add("fadeOut");

        setTimeout(() => {
          quotesWrapper.style.visibility = "hidden";
          quotesWrapper.innerHTML = "";
          quotesWrapper.innerHTML = quoteTemplate(data[i]);
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

  getQuotes(DB.quotes);
}

export default quotes;
