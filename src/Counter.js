import React, { useState } from 'react';

function Counter() {
  // useState は現在のstateの値と、それを更新するための関数をペアにして返す
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;