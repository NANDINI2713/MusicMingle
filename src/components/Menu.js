import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Menu({ title, menuObject }) {
  const navigate = useNavigate();
  useEffect(() => {
    const allLi = document
      .querySelector(".MenuContainer ul")
      .querySelectorAll("li");

    function changeActiveMenu() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allLi.forEach((n) => n.addEventListener("click", changeActiveMenu));
  }, []);

  const handleArtist = (menu) => {
    switch (menu.name) {
      case "Artists":
        navigate("/Artists");
        break;
      case "Home":
        navigate("/Home");
    }
  };

  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>
      <ul>
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id}>
              {" "}
              <a href="" onClick={() => handleArtist(menu)}>
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Menu;
