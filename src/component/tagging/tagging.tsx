import { useState } from 'react';
import './tagging.css'

function Tagging(props: { children: JSX.Element; }) {
  const [action] = useState(false);

  if (action) {
    return false
  }

  return (
    <div className="nitification">
      <span className='tagging'></span>
      {props.children}
    </div>
  );
}

export default Tagging

