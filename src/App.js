import React from 'react'
import Home from "./pages/Home";


function App() {
	return (
		<Home/>
	);
}

export default App;


// import Home from "./pages/Home";
// import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// import Modal from '../src/pages/Modal'
// import { Navbar } from "react-bootstrap";

// function App() {
//   return (
    
//     <Router>
//     <div className="app">   

//         {/* 👇️ Wrap your Route components in a Routes component */}
//         <Routes>
//           <Route path="/Home" element={<><Navbar/> <Navbar/></>} />
//           <Route exact path="/" element={<><Modal/><Home/></>}/>
//           {/* <Route path="/"  element={<Home />} /> */}
//         </Routes>
//         </div>
//        </Router>
     
//   );
// }

// export default App;
