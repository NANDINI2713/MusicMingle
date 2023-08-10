import React, { useState ,useEffect} from "react";
import "./RightMenu.css";
import { FaSun } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RightMenu() {
  const navigate = useNavigate();
    const [userData, setUserData] = useState(null);


  const handleLogout = () => {
    navigate("/Login");
  };

  useEffect(() => {
    // Assuming you have the user's ID available after authentication
    const userId = "your_user_id_here";

    // Fetch user data from the API
    axios.get(`/api/user/${userId}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []);


  return (
    <div className="rightContainer">
      <div className="profile">
        <li className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="user">
              <AiOutlineUser />
            </i>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/WebDesign">
                Username : Nandini Patel
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/WebFeature">
                Email : nandinipatel2713@gmail.com
              </a>
            </li>
          </ul>
        </li>

        <i className="darkMode">
          <FaSun />
        </i>
        <i className="logout" onClick={handleLogout}>
          <HiOutlineLogout />
        </i>
      </div>
    </div>
  );
}

export default RightMenu;
