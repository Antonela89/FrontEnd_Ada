document.addEventListener("DOMContentLoaded", () => {
  const navbarBurger = document.querySelector(".navbar-burger");

  navbarBurger.addEventListener("click", () => {
    const target = navbarBurger.dataset.target;
    const menu = document.getElementById(target);
    navbarBurger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });

  const currentUser =
    localStorage.getItem("currentUser") ||
    sessionStorage.getItem("currentUser");

  if (currentUser) {
    document.getElementById("login-button").classList.add("is-hidden");
    document.getElementById("login-link-nav").classList.add("is-hidden");
    document.getElementById("logout-button").classList.remove("is-hidden");
  } else {
    document.getElementById("login-button").classList.remove("is-hidden");
    document.getElementById("login-link-nav").classList.remove("is-hidden");
    document.getElementById("logout-button").classList.add("is-hidden");
  }
});

function handleLogout(event) {
  event.preventDefault();
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");
  window.location.reload();
}
