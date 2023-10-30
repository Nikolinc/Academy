import './header.css'
import Left from "../../assets/Left.svg"
import { useLocation, useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import { useRef, useState } from 'react';
import { ITooltipProps } from '../../types/tooltipProps';

function Header() {

  const navigate = useNavigate();
  const location = useLocation().pathname;
  const homePage = location.indexOf("sound") > -1;

  const [opened, setOpened] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClose = () => {
    setOpened(false);
  };

  return (
    <header className='header'>
      <div onClick={() => navigate("home")} className='back'>
        <img src={Left} alt="Academy" width={24} />
        Academy
      </div>
      {!homePage ?
        <div className='filter'>
          <div>
            <input type="radio" id="All" name="drone" value="dewey" />
            <label htmlFor="All" >All</label>
          </div>
          <div>
            <input type="radio" id="Stocks" name="drone" value="dewey" />
            <label htmlFor="Stocks" >Stocks</label>
          </div>
          <div>
            <input type="radio" id="ETFs" name="drone" value="dewey" />
            <label htmlFor="ETFs" >ETFs</label>
          </div>
          <div>
            <input type="radio" id="Crypto" name="drone" value="dewey" />
            <label htmlFor="Crypto" >Crypto</label>
          </div>
          <div>
            <input type="radio" id="NFTs" name="drone" value="dewey" />
            <label htmlFor="NFTs" >NFTs</label>
          </div>
          <button onClick={() => setOpened(true)} ref={buttonRef}>Filter</button>
        </div> :
        <button>Skip</button>}
      <Modal opened={opened} triggerRef={buttonRef} onClose={onClose} />
    </header>)
}

function Modal(props: ITooltipProps) {

  const tooltipRef = useRef<HTMLDivElement>(null);


  useModal({
    elementRef: tooltipRef,
    triggerRef: props.triggerRef,
    onOutsideClick: props.onClose,
    enabled: props.opened,
  });

  if (!props.opened) {
    return null;
  }

  return <div className="modal-filter" ref={tooltipRef}>
    <div className='filter'>
      <div>
        <input type="radio" id="All-modal" name="drone" value="dewey" />
        <label htmlFor="All-modal" >All</label>
      </div>
      <div>
        <input type="radio" id="Stocks-modal" name="drone" value="dewey" />
        <label htmlFor="Stocks-modal" >Stocks</label>
      </div>
      <div>
        <input type="radio" id="ETFs-modal" name="drone" value="dewey" />
        <label htmlFor="ETFs-modal" >ETFs</label>
      </div>
      <div>
        <input type="radio" id="Crypto-modal" name="drone" value="dewey" />
        <label htmlFor="Crypto-modal" >Crypto</label>
      </div>
      <div>
        <input type="radio" id="NFTs-modal" name="drone" value="dewey" />
        <label htmlFor="NFTs-modal" >NFTs</label>
      </div>
    </div>
  </div>
}


export default Header