import React from 'react'

import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
import TrendCard from '../TrendCard/TrendCard'
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard location = 'homepage'/>
        <TrendCard/>
       
    </div>
    )
}

export default ProfileSide