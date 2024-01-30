import React, { useState } from 'react';
import { getUsers } from '../../api/TrendRequest';
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
import UserListModal from './UserListModal';
import { useSelector } from "react-redux";

const LogoSearch = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [searchTag, setSearchTag] = useState('');
  const [userList, setUserList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleSearch = async () => {
    try {
     
      const data={
        id:user._id,
        trend:searchTag
      }
      console.log(data)
      const response = await getUsers({
        id:user._id,
        trend:searchTag
      });
      setUserList(response.data);
      console.log("hi"+response.data);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUserList([]);
  };


  return (
    <div className="LogoSearch">
      
      <div className="Search">
          <input type="text" value={searchTag} onChange={(e) => setSearchTag(e.target.value)} placeholder="#Explore"/>
          <div className="s-icon">
                <UilSearch/>
          </div>
          <button onClick={handleSearch}>Search</button>
          {showModal && (
        <UserListModal users={userList} onClose={handleCloseModal} />
      )}
      </div>
    </div>
  );
};

export default LogoSearch;
