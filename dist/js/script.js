// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const bottomnav = document.querySelector("#bottom-navigation");
  const fixednav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    bottomnav.classList.add("navbar-bottom");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    bottomnav.classList.remove("navbar-bottom");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Dark Mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// TOGGLE BUTTON DARK MODE (LOCAL STORAGE) BASED ON USER PREFERENCE
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
