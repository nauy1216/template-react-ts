import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return <div>{time}</div>;
}

class ClassClock extends React.Component<unknown, { time: number }> {
  timer: any = -1;

  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

export default function State(props) {
  return (
    <div>
      <Clock></Clock>
      <ClassClock></ClassClock>
    </div>
  );
}
