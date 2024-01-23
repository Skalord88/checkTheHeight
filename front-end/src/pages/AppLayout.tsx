import React from "react";
import { Outlet, Link } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <b><Link to="list">list of persona</Link></b>
            </li>
            <li>
            <b><Link to="create">create persona</Link></b>
            </li>
            <li>
              <b><Link to="sort">high to low persona</Link></b>
            </li>
            <li>
              <b><Link to="check">find highest persona</Link></b>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
