let themeMainContainer = document.getElementById("themecontainer");

let themeHeading = document.getElementById("headingElement");

let themeInput = document.getElementById("themeInput");

let lightThemeUrl =
  "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";

let darkThemeUrl =
  "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function changeTheme(event) {
  if (event.key === "Enter") {
    let themeInputElement = themeInput.value;
    if (themeInputElement === "Dark") {
      themeMainContainer.style.backgroundImage = darkThemeUrl;
      themeHeading.style.color = "#fff";
    } else if (themeInputElement === "Light") {
      themeMainContainer.style.backgroundImage = lightThemeUrl;
      themeHeading.style.color = "#014d40";
    } else if (themeInputElement != "Dark" || "Light") {
      alert("Please enter a valid input!");
    }
  }
}
themeInput.addEventListener("keydown", changeTheme);
