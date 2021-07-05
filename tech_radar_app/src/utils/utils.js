export const removeButtonColors = () => {
  const buttons = document.querySelectorAll(".header-square");

  for (const buttonElement of buttons) {
    buttonElement.classList.remove("active");
  }
};
