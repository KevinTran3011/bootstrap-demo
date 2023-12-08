const sidebarSectionOnclick = (event) => {
  const targetElement = event.currentTarget;
  targetElement.classList.toggle("clicked");

  const downArrow = targetElement.querySelector("#expanded_arrow");
  if (downArrow) {
    downArrow.classList.toggle("expanded");
  }
};

const sectionItems = document.querySelectorAll(".section_item");
sectionItems.forEach((item) => {
  item.addEventListener("click", sidebarSectionOnclick);
});

// FUNCTION FOR GRID ON CLICK
const gridSectionOnClick = () => {
  const gridSection = event.currentTarget;
  gridSection.classList.toggle("grid_onClick");
};

const gridItems = document.querySelectorAll(".box_grid_text");
gridItems.forEach((item) => {
  item.addEventListener("click", gridSectionOnClick);
});

// FUNCTION FOR SIDE BAR LIST
const toggleCards = () => {
  var styleList = document.getElementById("cardList");
  if (styleList) {
    styleList.style.display =
      styleList.style.display === "block" ? "none" : "block";
  }
};

const toggleProfile = () => {
  var styleList = document.getElementById("profileList");
  if (styleList) {
    styleList.style.display =
      styleList.style.display === "block" ? "none" : "block";
  }
};

const toggleUserDropdown = () => {
  var userDropdown = document.getElementById("userDropdown");
  if (userDropdown) {
    userDropdown.style.display =
      userDropdown.style.display === "block" ? "none" : "block";
  }
};
