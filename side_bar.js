const showSidebar = () => {
  let width = window.innerWidth;
  const sidebarSection = document.querySelector(".side_bar");
  sidebarSection.style.transition = "all 0.2s ease-in-out";
  let rightSection = document.getElementById("rightSection");
  if (width < 768) {
    sidebarSection.style.width = "50%";
  } else {
    sidebarSection.style.width = "14.5%";
    rightSection.classList.remove("col-lg-12");
    rightSection.classList.add("col-lg-10");
  }
  const closeButton = document.getElementById("closeButton");
  closeButton.style.display = "block";
};

const hideSidebar = () => {
  const sidebarSection = document.querySelector(".side_bar");
  sidebarSection.style.width = "0";
  let rightSection = document.getElementById("rightSection");
  rightSection.classList.remove("col-lg-10");
  rightSection.classList.add("col-lg-12");
};
