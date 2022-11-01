import PeopleScores from "./commponents/PeopleScores";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Divide from "./commponents/Divide";
import { useEffect } from "react";
function App() {
  
  const rows = [
    {
        name: "anhad",
        stamina: 3,
        response: 4,
        focusOnGame: 5,
        clean: 5,
        stressHandler: 4,
       
    },
    {
        name: "sharma",
        stamina: 3,
        response: 3,
        focusOnGame: 5,
        clean: 5,
        stressHandler: 4,
      
    },
    {
        name: "sugandh",
        stamina: 2,
        response: 3,
        focusOnGame: 3,
        clean: 4,
        stressHandler: 4,
      
    },
    {
        name: "janvi",
        stamina: 3,
        response: 4,
        focusOnGame: 4,
        clean: 4,
        stressHandler: 4,
       
    },
    {
        name: "anhad janvi",
        stamina: 4,
        response: 4,
        focusOnGame: 5,
        clean: 5,
        stressHandler: 4,
       
    },
    {
        name: "abc",
        stamina: 3,
        response: 4,
        focusOnGame: 4,
        clean: 4,
        stressHandler: 4,
      
    },
    {
        name: "opq",
        stamina: 3,
        response: 4,
        focusOnGame: 4,
        clean: 4,
        stressHandler: 4,
       
    },
    {
        name: "wyx",
        stamina: 3,
        response: 4,
        focusOnGame: 4,
        clean: 4,
        stressHandler: 4,
       
    },
    {
      name: "wyxabc",
      stamina: 3,
      response: 4,
      focusOnGame: 4,
      clean: 4,
      stressHandler: 4,
     
  },
];

    rows.forEach((v)=>{
      v.total =v.stamina+ v.response + v.focusOnGame + v.clean + v.stressHandler
    });
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PeopleScores rows = {rows}/>}/>
        <Route path="/divide" element={<Divide rows = {rows}/>}/>
      </Routes>
      </BrowserRouter>  
    </div>
  );
}
export default App;