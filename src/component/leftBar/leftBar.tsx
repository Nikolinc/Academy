import React, { useState } from "react";
import Tilt from '../tagging/tagging';
import './leftBar.css';
import { Link } from "react-router-dom";

function LeftBar() {

 const [search, setSearch] = useState("")

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
      <Link to={""}>Home</Link>
      <Link to={""}>Watch</Link>
      <Link to={""}>Community</Link>
    </div>
  </div >)
}

export default LeftBar