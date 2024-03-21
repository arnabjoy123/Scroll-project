//navbar toggle

const navtog = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navtog.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

//date
const year = document.querySelector("#year");

year.innerHTML = new Date().getFullYear();

//fixed nav
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});

////smooths scroll

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = links.getBoundingClientRect().height;
    // const fixedNav = nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
