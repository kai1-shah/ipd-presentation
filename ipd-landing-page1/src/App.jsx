
// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css'; // Import the CSS file
// import Header from './Header'; // Import the Header component
// import Login from './Login'; // Import the Login component
// import Signup from './Signup'; // Import the Signup component
// import appImage from './assets/app-image.jpg'; // Adjust the path to your image file

// const App = () => {
//     return (
//         <Router>
//             <Header /> {/* Render the Header component */}
//             <Routes>
//                 <Route path="/" element={
//                     <div className="container">
//                         <div className="left-section">
//                             <h1 className="animated-title">Vastra-View</h1>
//                             <h2 className="animated-title1">Virtual-try onfhdkfjhfhdifhddjfhsdfsdf</h2>
//                             <h2 className="animated-title1">Virtual-try on ----------------------</h2>
//                             <h2 className="animated-title1">Virtual-try on--------------------------</h2>
//                             <div className="button-container">
//                                 <button className="action-button" onClick={() => window.location.href='/login'}>Login</button>
//                                 <button className="action-button" onClick={() => window.location.href='/signup'}>Sign Up</button>
//                             </div>
//                         </div>
//                         <div className="image">
//                             <img src={appImage} alt="App Screenshot" />
//                         </div>
//                     </div>
//                 } />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;
//Revolutionize your wardrobe with a custom body model—no more guessing or disappointing fits
// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file
import Header from './Header'; // Import the Header component
import Login from './Login'; // Import the Login component
import Signup from './Signup'; // Import the Signup component
import appImage from './assets/app-image.jpg'; // Adjust the path to your image file

const Home = () => {
    const navigate = useNavigate(); // Use navigate for internal routing

    return (
        <div className="container">
            <div className="left-section">
                <h1 className="animated-title">Vastra View</h1>
                <h2 className="animated-title1">Revolutionize your wardrobe</h2>
                <h2 className="animated-title1">with a custom body model</h2>
                <h2 className="animated-title1"> And no more disappointing fits</h2>
                <div className="button-container">
                    <button className="action-button" onClick={() => navigate('/login')}>Login</button>
                    <button className="action-button" onClick={() => navigate('/signup')}>Sign Up</button>
                </div>
            </div>
            <div className="image">
                <img src={appImage} alt="App Screenshot" />
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Header /> {/* Render the Header component */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
