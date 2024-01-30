// UserListModal.js
import React from "react";

const UserListModal = ({ users, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Users Matching the Search:</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.firstname} {user.lastname} - {user.username}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserListModal;
