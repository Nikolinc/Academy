
import useTilt from '../../hooks/useTilt';
import './tilt.css'
import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Tilt(props: { children: any; classname: string, style: any }) {
  const [action, setAction] = useState(false);
  const ref = useTilt(action);
  return (
    <div
      style={props.style}
      className={props.classname}
      onMouseOver={() => setAction(true)}
      onMouseOut={() => setAction(false)}
      ref={ref}
    >
      {props.children}
    </div>
  );
}