import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  var a = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(a, 'useEffect');
    document.title = `You clicked ${count} times`;
    return () => {
      console.log(a, 'end useEffect');
      document.title = 'remove';
    };
  });
  useLayoutEffect(() => {
    console.log(a, 'useLayoutEffect');
    document.title = `You clicked ${count} times`;
    return () => {
      console.log(a, 'end useLayoutEffect');
      document.title += '!!!';
    };
  });

  console.log(count, '更新Example');
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <input
        ref={a}
        value={text}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <span>共{text.length}个字符</span>
      <Child />
    </div>
  );
}

class Child extends React.Component {
  componentDidMount() {
    console.log('Child mount');
  }
  componentDidUpdate() {
    console.log('Child update');
  }
  render() {
    return <span>Child</span>;
  }
}

export default class App extends React.Component<{}, { aaa: number }> {
  state = {
    aaa: 1
  };
  onClick() {
    this.setState(function (s) {
      return {
        aaa: s.aaa + 1
      };
    });
  }
  componentDidMount() {
    console.log('app mount');
  }
  componentDidUpdate() {
    console.log('app update');
  }
  render() {
    return (
      <div>
        {this.state.aaa < 10 ? <Example /> : null}
        <h1 onClick={this.onClick.bind(this)}>{this.state.aaa}</h1>
      </div>
    );
  }
}
