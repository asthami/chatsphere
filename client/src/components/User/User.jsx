import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../actions/UserAction";
import { createChat } from "../../api/ChatRequests";
import prof from "../../img/prof.png";

const User = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch()
  
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    if(!following)
    {
      dispatch(followUser(person._id, user));
      const message = {
        senderId : user._id,
        receiverId: person._id,
    }
    const { data } = createChat(message);
    console.log(data);

    setFollowing((prev) => !prev);

    }
    else{ dispatch(unfollowUser(person._id, user))
      
    setFollowing((prev) => !prev);
    }
  };
  return (
    <div className="follower">
      <div>
        <img
          src={
            publicFolder + person.profilePicture
              ? publicFolder + person.profilePicture
              : prof
          }
          alt="profile"
          className="followerImage"
        />
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
