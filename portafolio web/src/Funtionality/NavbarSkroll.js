const linkLetter = document.querySelector(".linkLetter");
const header = document.getElementById('headerId');
let timeoutId;
let linkClicked = false;
let mouseOverHeader = false;
let scrollEventEnabled = true;

// Event listener for when the mouse enters the header
header.addEventListener("mouseenter", () => {
  mouseOverHeader = true;
});

// Event listener for when the mouse leaves the header
header.addEventListener("mouseleave", () => {
  mouseOverHeader = false;
});

export default function NavbarScroll() {
  if (linkLetter) {
    linkLetter.addEventListener("click", () => {
      linkClicked = true;
      header.classList.remove("headerBg");
      header.style.display = "block";

      // Disable scroll event temporarily
      scrollEventEnabled = false;
      setTimeout(() => {
        scrollEventEnabled = true;
      }, 100);
    });
  }

  window.addEventListener("scroll", () => {
    if (!scrollEventEnabled || mouseOverHeader) {
      return;
    }

    const positionY = window.scrollY;

    if (positionY > 0 && !linkClicked) {
      header.classList.add("headerBg");
      header.style.display = "block";

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.scrollY > 0 && !mouseOverHeader) {
          header.classList.remove("headerBg");
          header.style.display = "none";
        }
      }, 2000);
    } else if (positionY === 0 && !linkClicked) {
      header.style.display = "block";
    } else {
      header.style.display = "none";
    }
  });
}
