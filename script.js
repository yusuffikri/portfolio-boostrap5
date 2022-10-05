// Dark Mode

if (localStorage.getItem("theme") == "dark") set;
setDarkMode(true);

function setDarkMode(isDark) {
  if (isDark) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem;
    ("theme");
  }
}
