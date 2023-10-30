import { ISoundList } from "../../types/soundlist";
import ArrowRight from "../../assets/Back.svg";
import coin from '../../assets/Coin.svg';
import './soundList.css'
import { Link, } from "react-router-dom";
import React from "react";
import Tilt from "../tilt/tilt";


function SoundList(props: { soundList: ISoundList[] }) {

  return (<div className="sound-list">
    <header>
      <h3>{props.soundList[0].category}</h3>
      <button>
        See All
        <img src={ArrowRight} alt="" />
      </button>
    </header>
    <div>
      {props.soundList?.map((sound: ISoundList) => {
        return (
          <React.Fragment key={sound.key}>
            <Tilt classname="tilt titleContent" style={{ backgroundImage: `url(${sound.image})` }}>
              <Link className="sound "
                to={`/sound/${sound.key}`}>
                <header>
                  <div className="earn"><img src={coin} alt="Earn" width={25} height={26} /> Earn 2T</div>
                  <div className="education" />
                </header>
                <footer className="footer-sound">
                  {sound.title}
                </footer>

              </Link></Tilt></React.Fragment>)
      })}
    </div>
  </div>)
}

export default SoundList