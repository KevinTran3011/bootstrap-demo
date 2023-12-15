const sidebarSectionOnclick = (event) => {
  // Remove 'clicked' class from all section items
  sectionItems.forEach((item) => {
    item.classList.remove("clicked");
    const downArrow = item.querySelector("#expanded_arrow");
    if (downArrow) {
      downArrow.classList.remove("expanded");
    }
  });

  // Add 'clicked' class to the clicked section item
  const targetElement = event.currentTarget;
  targetElement.classList.add("clicked");

  const downArrow = targetElement.querySelector("#expanded_arrow");
  if (downArrow) {
    downArrow.classList.add("expanded");
  }
};

const sectionItems = document.querySelectorAll(".section_item");
sectionItems.forEach((item) => {
  item.addEventListener("click", sidebarSectionOnclick);
});

// FUNCTION FOR GRID ON CLICK
const gridSectionOnClick = (event) => {
  const gridSection = event.currentTarget;
  gridSection.classList.toggle("grid_onClick");

  // Toggle text color within the clicked element
  const textElement = gridSection.querySelector(".material-symbols-outlined");
  const textElement2 = gridSection.querySelector(".box_grid_text_title");
  textElement.classList.toggle("text_onClick");
  textElement2.classList.toggle("text_onClick");
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
