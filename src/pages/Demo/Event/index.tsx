import React from 'react';
import { Button } from 'antd';

let t = null;
export default function Test(props) {
  const handleClick = ev => {
    console.log(1, t === ev);
    t = ev;
    console.log(1, ev);
    setTimeout(() => {
      console.log(2, ev);
    }, 1000);
  };
  return <Button onClick={handleClick}>Event</Button>;
}
