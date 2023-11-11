const btnNavEl = document.querySelector(".mobile-nav-icon");
const headerEl = document.querySelector(".header");
const allLink = document.querySelectorAll("a:link");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// const overFlow = document.querySelector(".overflow-hid");
const htmlEl = document.documentElement;
const bodyEl = document.body;
btnNavEl.addEventListener("click", function () {
  htmlEl.classList.toggle("overflow-hid");
  bodyEl.classList.toggle("overflow-hid");
});

// Closeing nav
allLink.forEach(function (link) {
  link.addEventListener("click", function () {
    if (link.classList.contains("main-nav-list")) {
      headerEl.classList.toggle("nav-open");
      htmlEl.classList.toggle("overflow-hid");
      bodyEl.classList.toggle("overflow-hid");
    }
  });
});
