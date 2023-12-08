const sidebarSectionOnclick = () => {
  const targetElement = document.getElementById("user");
  targetElement.classList.toggle("clicked");
};

document
  .getElementById("user")
  .addEventListener("click", sidebarSectionOnclick);

// FUNCTION FOR GRID ON CLICK
const gridSectionOnClick = () => {
  const gridSection = document.querySelector(".box_grid_text");
  gridSection.classList.toggle("grid_onClick");
};

document
  .querySelector(".box_grid_text")
  .addEventListener("click", gridSectionOnClick);
