// // frontend/src/components/Signup.jsx
// import React, { useState } from 'react';
// import './App.css'; // Import your CSS for styling

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('http://localhost:5000/api/auth/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, password }),
//         });
//         const data = await response.json();
//         alert(data.message || data.error);
//     };

//     return (
//         <div className="signup-container">
//             <h1>Sign Up</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit" className="action-button">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default Signup;

// frontend/src/components/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false); // State to track successful signup
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        
        if (response.ok) {
            setSignupSuccess(true); // Show success message
            setTimeout(() => {
                navigate('/login'); // Redirect to login after 3 seconds
            }, 3000); // 3-second delay
        } else {
            alert(data.error || 'Signup failed');
        }
    };

    return (
        <div className="signup-container">
           <h1 className="page-title">Vastra-View</h1> 
            <h1>Sign Up</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="action-button">Sign Up</button>
            </form>
            </div>
            {signupSuccess && <p>Signup successful! Redirecting to login...</p>}
        </div>
    );
};

export default Signup;

