function scrolling(upSelector) {
  const scrollUp = document.querySelector(upSelector);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 500) {
      scrollUp.style.visibility = "visible";
      scrollUp.classList.add("animated", "fadeIn");
      scrollUp.classList.remove("fadeOut");
    } else {
      scrollUp.classList.add("fadeOut");
      scrollUp.classList.remove("fadeIn");
      scrollUp.style.visibility = "hidden";
    }
  });

  // Scrolling with requestAnimationFrame
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.2;

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
}

export default scrolling;
