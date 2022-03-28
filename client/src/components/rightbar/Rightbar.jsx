import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.jpeg" alt="" />
            <span className="birthdayText"><b>Jack Sprat</b> and <b>5 other friends</b> have a birthday today
            </span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">Employees Online</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    );
  }

  const ProfileRightBar = () => {
    return (
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">St. Lucia</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Jack Hall</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Jack Hall</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Jack Hall</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Jack Hall</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Jack Hall</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Jack Hall</span>
        </div>
      </div>
      </>
      )
  }

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightBar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}
