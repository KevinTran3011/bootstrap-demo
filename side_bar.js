const showSidebar = () => {
  let width = window.innerWidth;
  if (width < 768) {
    const sidebarSection = document.querySelector(".side_bar");
    sidebarSection.style.display = "flex";
    sidebarSection.style.flexDirection = "column";
    const closeButton = document.getElementById("closeButton");
    closeButton.style.display = "block";
  }
};

const hideSidebar = () => {
  const sidebarSection = document.querySelector(".side_bar");
  sidebarSection.style.display = "none";
};
