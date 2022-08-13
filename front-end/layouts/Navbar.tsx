import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "../components/NavLink";
import { getJWT, setJWT } from "../utils/jwtUtils";

const Nav: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(!!getJWT());
  }, []);

  return (
    <Navbar bg="light" variant="light" expand="md" className="">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          My Website
        </a>
        <Navbar.Toggle />
        {/* <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <Navbar.Collapse id="navcol-1">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" href="/">
                Home
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li
                className="nav-item"
                onClick={() => {
                  setJWT();
                  setIsLoggedIn(false);
                }}
              >
                <a className="nav-link" href="#0">
                  Logout
                </a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" href="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" href="/register">
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
    // <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
    //   <div className="container">
    //     <a className="navbar-brand logo" href="#">
    //       My Website
    //     </a>
    //     <button
    //       data-bs-toggle="collapse"
    //       className="navbar-toggler"
    //       data-bs-target="#navcol-1"
    //     >
    //       <span className="visually-hidden">Toggle navigation</span>
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navcol-1">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <NavLink exact className="nav-link" href="/">
    //             Home
    //           </NavLink>
    //         </li>
    //         {isLoggedIn ? (
    //           <li
    //             className="nav-item"
    //             onClick={() => {
    //               setJWT();
    //               setIsLoggedIn(false);
    //             }}
    //           >
    //             <a className="nav-link" href="#0">
    //               Logout
    //             </a>
    //           </li>
    //         ) : (
    //           <>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" href="/login">
    //                 Login
    //               </NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" href="/register">
    //                 Register
    //               </NavLink>
    //             </li>
    //           </>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Nav;
