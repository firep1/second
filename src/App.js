import logo from './logo.svg';
import './App.css';
import Navbar from './com/navbar';
import Form from './com/form';
import Darkmode from './com/darkmode';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar1 from './com/navbar1';




function App() {
const [mode, setmode] = useState('light');
const [text, settext] = useState('Enable')
function toggle() {
  if(mode==='light')
  {
    setmode('dark');
    settext('Disable');
    document.body.style.backgroundColor='orange';
    document.title='Home-dark mode';
  }
  else
  {
    setmode('light');
    settext('Enable');
    document.body.style.backgroundColor='white';
    document.title='Home-light mode';
  }
  
}
  return (
<>
<BrowserRouter>
<Navbar1/>
{/* <Navbar  text={text}  mode={mode} toggle={toggle}/> */}
<div className="container">
<Routes>

<Route path='/darkmode' element={<Darkmode/>}/>

</Routes>
<Routes>

  <Route path='/form' element={<Form heading="enter the text to analysis" mode={mode} />}/>

</Routes>
</div>




</BrowserRouter>
</> 
  );
}


export default App;
