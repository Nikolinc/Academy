import React, { useState } from "react";
import Tilt from '../tagging/tagging';
import './leftBar.css';
import { Link } from "react-router-dom";

import Home from '../../assets/Home.svg';
import Play from '../../assets/Play.svg';
import Community from '../../assets/Community.svg';
import Help from '../../assets/Help.svg';

import user_one from '../../assets/avatars/community-user-1.png';
import user_two from '../../assets/avatars/community-user-2.png';
import user_trhee from '../../assets/avatars/community-user-3.png';


function LeftBar() {

  const [search, setSearch] = useState("")
  const [watching] = useState(2);
  const communitysList = [
    { name: "user one", avatar: user_one },
    { name: "user two", avatar: user_two },
    { name: "user trhee", avatar: user_trhee }
  ];

  return (<div className="left-bar">
    <div className="header">
      <Tilt>
        <button className='nitification-button'></button>
      </Tilt>
      <button className="user-button"></button>
    </div>
    <label>
      <input type="search"
        value={search}
        placeholder=" "
        onChange={(e) => { setSearch(e.target.value) }} />
    </label>
    <div className="navigation-bar">
      <h3>MAIN</h3>
      <Link className="Link" to={"/"}><img src={Home} alt="Home" />Home</Link>
      <div> <Link className="Link" to={""}><img src={Play} alt="Play" />Watch</Link>
        <h3>{watching}</h3>
      </div>
      <div>
        <Link className="Link" to={""}><img src={Community} alt="Community" />
          Community
        </Link>
        <div className="image">
          {communitysList.map((community, index) => {
            return <img src={community.avatar} key={index} width={30} style={{ zIndex: `${index}`, left: `${index}rem` }} />
          })}
        </div>
      </div>

    </div>
    <footer>
      <div>
        <Link className="Link" to={""}>
          <img src={Help} alt="Help" />
          Help
        </Link>
        <div className="links-footers">
          <Link  to={""}>Privacy & Policy</Link>
          <Link  to={""}>Terms & Conditions</Link>
        </div>
      </div>
    </footer>

  </div >)
}

export default LeftBar