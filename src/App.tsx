/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import React from 'react';
import MemoHook from "./Hooks/useMemoHook"
import CallbackHook from "./Hooks/CallbackHook"

const App = () => {
  return (
    <>
      <h2>Hello World!</h2>
        <MemoHook />
        <CallbackHook />
    </>
  );
};

export default App;
