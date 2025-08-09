import "./closeFriend.css";
import { Link } from "react-router-dom";

export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <Link to={`/profile/${user.username}`} className="sidebarFriendName">
        {user.username}
      </Link>
      {/* <span className="sidebarFriendName">{user.username}</span> */}
    </li>
  );
}
