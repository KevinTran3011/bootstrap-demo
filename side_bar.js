const showSidebar = () => {
  let width = window.innerWidth;
  if (width < 768) {
    const sidebarSection = document.querySelector(".side_bar");
    sidebarSection.style.transition = "all 0.2s ease-in-out";
    sidebarSection.style.width = "50%";
    const closeButton = document.getElementById("closeButton");
    closeButton.style.display = "block";
  }
};

const hideSidebar = () => {
  const sidebarSection = document.querySelector(".side_bar");
  sidebarSection.style.width = "0";
  let rightSection = document.getElementById("rightSection");
  rightSection.classList.remove("col-lg-10");
  rightSection.classList.add("col-lg-12");
};
