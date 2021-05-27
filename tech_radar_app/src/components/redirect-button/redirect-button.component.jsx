import React from "react";
import { withRouter } from "react-router-dom";

const RedirectButton = ({ redirectPath, classes, children, history, ...props }) => {
  const removeButtonColors = () => {
    const buttons = document.querySelectorAll(".header-square");

    for (const buttonElement of buttons) {
      buttonElement.classList.remove("active");
    }
  };
  const handleRedirect = event => {
    removeButtonColors();

    event.target.classList.add("active");

    history.push(redirectPath);
  };
  return (
    <button
      onClick={handleRedirect}
      className={classes}
      {...props}>
      {children}
    </button>
  );
};

export default withRouter(RedirectButton);
