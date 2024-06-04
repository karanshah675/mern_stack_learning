import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from './Card'
function App() {

  return (
    <>
      <h1 className="bg-green-400 mb-10">this is tailwind</h1>
      <div className="flex gap-2">
        <Card name="karan shah" btnTxt="click me"/>
        <Card name="hello" />
      </div>
    </>
  );
}

export default App
