import React, { useState, useMemo, Fragment, memo, useCallback } from 'react';

// ==============useMemo===========================
function TestUseMemo() {
  let [isChild, setChild] = useState(false);

  return (
    <div>
      <TestUseMemoChild isChild={isChild} name="child" />
      <button onClick={() => setChild(!isChild)}>改变Child</button>
    </div>
  );
}

let TestUseMemoChild = (props: { name: string; isChild: boolean }) => {
  let getRichChild = () => {
    console.log('rich child');

    return 'rich child';
  };

  // 使用了useMemo后，只要props.name没有发生变化就不会重复执行getRichChild
  let richChild = useMemo(() => {
    //执行相应的函数
    return getRichChild();
  }, [props.name]);

  // 未使用 useMemo 将会在每次改变isChild的值重新渲染Child时， 重复执行
  // let richChild = getRichChild();

  return (
    <div>
      isChild: {props.isChild ? 'true' : 'false'}
      <br />
      {richChild}
    </div>
  );
};

// =================useCallback=====================
const TestUseCallbackChild = memo(function TestUseCallbackChild(props: { onChange: (e) => void }) {
  console.log(props);

  return (
    <div>
      <input type="text" onChange={props.onChange} />
    </div>
  );
});

const TestUseCallback = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // 使用useCallback后会缓存上一次渲染时绑定的事件处理函数，因为两次渲染时给TestUseCallbackChild
  // 传入的都是同一个函数所以不会引起更新
  // eslint-disable-next-line
  const handleOnChange = useCallback(e => {
    setText(e.target.value);
  }, []);

  // 没有缓存handleOnChange, 每次点击按钮的时候都会更新TestUseCallbackChild组件，这是不必要的更新
  // eslint-disable-next-line
  const handleOnChange1 = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <div>count: {count}</div>
      <div>text: {text}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        +1
      </button>
      <TestUseCallbackChild onChange={handleOnChange} />
    </div>
  );
};

export default function TestHook() {
  return (
    <Fragment>
      <h1>useMemo</h1>
      <TestUseMemo></TestUseMemo>
      <h1>useCallback</h1>
      <TestUseCallback></TestUseCallback>
    </Fragment>
  );
}
