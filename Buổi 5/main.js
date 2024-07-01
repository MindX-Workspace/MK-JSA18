// Session Storage
const currentTheme = sessionStorage.getItem("theme");

const darkTheme = document.getElementById("dark-mode");
const lightTheme = document.getElementById("light-mode");

if (currentTheme) {
  document.body.classList.add(currentTheme);
}

darkTheme.addEventListener("click", () => {
  document.body.classList.remove("light");
  document.body.classList.add("dark");

  sessionStorage.setItem("theme", "dark");
});

lightTheme.addEventListener("click", () => {
  document.body.classList.remove("dark");
  document.body.classList.add("light");

  sessionStorage.setItem("theme", "light");
});

// Local Storage
// const currentTheme = localStorage.getItem("theme");

// const darkTheme = document.getElementById("dark-mode");
// const lightTheme = document.getElementById("light-mode");

// if (currentTheme) {
//   document.body.classList.add(currentTheme);
// }

// darkTheme.addEventListener("click", () => {
//   document.body.classList.remove("light");
//   document.body.classList.add("dark");

//   localStorage.setItem("theme", "dark");
// });

// lightTheme.addEventListener("click", () => {
//   document.body.classList.remove("dark");
//   document.body.classList.add("light");

//   localStorage.setItem("theme", "light");
// });
