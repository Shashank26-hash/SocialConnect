// Sidebar.jsx

import "./sidebar.css";
import { RssFeed, Chat } from "@material-ui/icons";

import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
const CloseFriend = React.lazy(() => import("../closeFriend/CloseFriend"));

axios.defaults.baseURL = "https://socialconnect-svj3.onrender.com/api";

export default function Sidebar() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/users/all");
        setUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("failed to fetch users", error);
      }
    };
    fetchUsers();
    console.log("Component mounted");

    return () => {
      console.log("MyComponent unmounted");
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
        </ul>

        <hr className="sidebarHr" />
      </div>
      <div className="sidebarFriendList">
        <ul>
          <Suspense fallback={<CircularProgress />}>
            {users.map((u) => (
              <CloseFriend key={u._id} user={u} />
            ))}
          </Suspense>
        </ul>
      </div>
    </div>
  );
}
