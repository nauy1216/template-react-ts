import React from 'react';

class Timer extends React.Component<
  {
    time: number;
  },
  unknown
> {
  // 1、初始化阶段
  constructor(props) {
    super(props);
    console.log('子组件 constructor');
    this.state = {};
  }

  // 2、组件的挂载阶段
  // 包括componentWillMount、render、componentDidMount
  UNSAFE_componentWillMount() {
    console.log('子组件 componentWillMount');
  }

  componentDidMount() {
    console.log('子组件 componentDidMount');
  }

  // 3、组件的更新阶段
  // shouldComponentUpdate、componentWillUpdate、componentDidUpdate
  UNSAFE_componentWillReceiveProps() {
    console.log('子组件 componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('子组件 shouldComponentUpdate');
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log('子组件 componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('子组件 componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('子组件 componentWillUnmount');
  }

  // componentWillUnmount() {
  //   console.log('componentDidUnmount');
  // }

  render() {
    console.log('子组件 render');
    return <div>{this.props.time}</div>;
  }
}

export default class Lifecycle extends React.Component<
  unknown,
  {
    time: number;
  }
> {
  timer: NodeJS.Timeout | null = null;

  // 1、初始化阶段
  constructor(props) {
    super(props);
    console.log('父组件 constructor');
    this.state = {
      time: 0
    };
  }

  // 2、组件的挂载阶段
  // 包括componentWillMount、render、componentDidMount
  UNSAFE_componentWillMount() {
    console.log('父组件 componentWillMount');
  }

  componentDidMount() {
    console.log('父组件 componentDidMount');
    this.timer = setInterval(() => {
      console.log('====================================');
      this.setState({
        time: this.state.time + 1
      });
      if (this.state.time >= 2) {
        clearInterval(this.timer!);
      }
    }, 1000);
  }

  // 3、组件的更新阶段
  // shouldComponentUpdate、componentWillUpdate、componentDidUpdate
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('父组件 componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('父组件 shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps: any, nextState: any) {
    console.log('父组件 componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(preProps, preState) {
    console.log('父组件 componentDidUpdate', preProps, preState);
  }

  // 4、卸载阶段
  componentWillUnmount() {
    console.log('父组件 componentWillUnmount');
    clearInterval(this.timer!);
  }

  // componentWillUnmount() {
  //   console.log('componentDidUnmount');
  // }

  render() {
    console.log('父组件 render');
    return (
      <div>
        生命周期<Timer time={this.state.time}></Timer>
      </div>
    );
  }
}
